'use client';

import { useWeather } from '@/hooks/queries/useWeather';
import { useGeolocation } from '@/hooks/user/useGeolocation';
import StoreLink from './StoreLink';
import Mypola from './Mypola';
import WeatherIcon from './WeatherIcon';
import MileageBar from './MileageBar';
import { LEVEL_POLA_NAME } from '@/constants/levelInfo';
import Image from 'next/image';

type DesktopMypolaContainerProps = {
  level: number;
  mileage: number;
  usernickname: string;
  point: number;
  id: string;
};

const WEATHER_COLOR_MAP = {
  sunny: 'bg-weather-802',
  cloudy: 'bg-weather-802',
  gloomy: 'bg-neutral-200',
  rainy: 'bg-primary-100',
  snowy: 'bg-primary-100',
};

export default function DesktopMypolaContainer({
  level,
  mileage,
  usernickname,
  point,
  id,
}: DesktopMypolaContainerProps) {
  const { position, isLoading: isGeolocationLoading } = useGeolocation();
  const { data: weather, isLoading: isWeatherLoading } = useWeather(position);

  return (
    <>
      <div className={`fixed top-0 left-0 w-screen h-screen z-[-9] ${WEATHER_COLOR_MAP[weather || 'sunny']}`} />
      <div className='flex flex-col justify-center items-center w-full h-full py-[40px]'>
        <div className='flex flex-row justify-between items-start w-full'>
          <div>
            <h2 className='text-[36px] text-neutral-1000 font-semibold'>{usernickname}님의 폴라가 성장하고 있어요!</h2>
            <p className='text-[20px] text-primary-400 font-medium'>아이템 상점에 가서 아이템을 구경해보세요!</p>
          </div>
          <StoreLink point={point} />
        </div>
        <div className='w-[520px] flex justify-end'>
          {isGeolocationLoading || isWeatherLoading ? (
            <div className='w-[120px] h-[120px] desktop:w-[141px] desktop:h-[141px] flex justify-center items-center'>
              <div className='w-[60px] h-[60px] desktop:w-[70px] desktop:h-[70px] border-4 border-neutral-200 border-t-neutral-400 rounded-full animate-spin'></div>
            </div>
          ) : (
            <WeatherIcon weather={weather || 'sunny'} />
          )}
        </div>
        <div className='relative w-[200px] h-[300px] flex justify-center items-end mb-[20px]'>
          <Mypola
            level={level}
            id={id}
          />
          <Image
            src='/assets/images/mypola/mypola-shadow.webp'
            alt='mypola-shadow'
            width={214}
            height={130}
            className='z-[1] absolute left-1/2 -translate-x-1/2 translate-y-1/2'
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
    </>
  );
}
