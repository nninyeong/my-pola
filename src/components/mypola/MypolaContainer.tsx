'use client';

import { useWeather } from '@/hooks/queries/useWeather';
import { useGeolocation } from '@/hooks/user/useGeolocation';
import MileageBar from './MileageBar';
import { LEVEL_POLA_NAME } from '@/constants/levelInfo';
import WeatherIcon from './WeatherIcon';
import Image from 'next/image';
import Mypola from './Mypola';
import { WEATHER_COLOR_MAP } from '@/constants/weather';

type MypolaContainerProps = {
  level: number;
  mileage: number;
  usernickname: string;
};

export default function MypolaContainer({ level, mileage, usernickname }: MypolaContainerProps) {
  const { position, isLoading: isGeolocationLoading } = useGeolocation();
  const { data: weather, isLoading: isWeatherLoading } = useWeather(position);

  return (
    <div className='flex flex-col justify-between items-center w-[314px] h-full pb-[82px] mx-auto'>
      <div
        className={`fixed top-[-150px] w-full h-[514px] z-[-9] rounded-b-full ${WEATHER_COLOR_MAP[weather || 'sunny']}`}
      />
      <div className='flex justify-between w-full'>
        <h1 className='flex flex-col justify-center items-start text-neutral-1000 font-semibold text-[20px] select-none'>
          <span>{usernickname}님의 폴라가</span>
          <span>성장하고 있어요!</span>
        </h1>

        {isGeolocationLoading || isWeatherLoading ? (
          <div className='w-[120px] h-[120px] flex justify-center items-center'>
            <div className='w-[60px] h-[60px] border-4 border-neutral-200 border-t-neutral-400 rounded-full animate-spin'></div>
          </div>
        ) : (
          <WeatherIcon weather={weather || 'sunny'} />
        )}
      </div>
      <div className='w-full h-[300px] flex justify-center items-end relative'>
        <Mypola level={level} />
        <Image
          src='/assets/images/mypola/mypola-shadow.webp'
          alt='mypola-shadow'
          width={214}
          height={130}
          className='z-[1] absolute bottom-[20px] left-1/2 -translate-x-1/2'
        />
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
