'use client';

import { useWeather } from '@/hooks/queries/useWeather';
import { useGeolocation } from '@/hooks/user/useGeolocation';
import MileageBar from './MileageBar';
import { LEVEL_POLA_NAME } from '@/constants/levelInfo';
import WeatherIcon from './WeatherIcon';

type MypolaContainerProps = {
  level: number;
  mileage: number;
  usernickname: string;
};

export default function MypolaContainer({ level, mileage, usernickname }: MypolaContainerProps) {
  const { position, isLoading: isGeolocationLoading } = useGeolocation();
  const { data: weather, isLoading: isWeatherLoading } = useWeather(position);

  if (isGeolocationLoading || isWeatherLoading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  return (
    <div className='flex flex-col justify-between items-center w-[314px] h-full pb-[82px] mx-auto'>
      <div className='flex justify-between w-full'>
        <h1 className='flex flex-col justify-center items-start text-neutral-1000 font-semibold text-[20px] select-none'>
          <span>{usernickname}님의 폴라가</span>
          <span>성장하고 있어요!</span>
        </h1>
        <WeatherIcon weather={weather || 'sunny'} />
      </div>
      <div>
        <p className='font-semibold text-neutral-1000 text-[20px] text-center mb-[32px]'>
          LEVEL. {level} {LEVEL_POLA_NAME[`level${level}` as keyof typeof LEVEL_POLA_NAME]}
        </p>
        <MileageBar
          mileage={mileage}
          level={level}
        />
      </div>
    </div>
  );
}
