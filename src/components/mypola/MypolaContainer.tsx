'use client';

import { useWeather } from '@/hooks/queries/useWeather';
import { useGeolocation } from '@/hooks/user/useGeolocation';
import MileageBar from './MileageBar';
import { LEVEL_POLA_NAME } from '@/constants/levelInfo';
type MypolaContainerProps = {
  level: number;
  mileage: number;
};

export default function MypolaContainer({ level, mileage }: MypolaContainerProps) {
  const { position, isLoading: isGeolocationLoading } = useGeolocation();
  const { data: weather, isLoading: isWeatherLoading } = useWeather(position);

  if (isGeolocationLoading || isWeatherLoading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  return (
    <div className='flex flex-col justify-around items-center h-[520px]'>
      <div className='h-[400px]'>현재 날씨: {weather}</div>
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
