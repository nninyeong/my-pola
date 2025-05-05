'use client';

import { useWeather } from '@/hooks/queries/useWeather';
import { useGeolocation } from '@/hooks/user/useGeolocation';
import MileageBar from './MileageBar';
import { LEVEL_POLA_NAME } from '@/constants/levelInfo';
import WeatherIcon from './WeatherIcon';
import Mypola from './Mypola';

type MypolaContainerProps = {
  level: number;
  mileage: number;
  usernickname: string;
  equippedItem: number;
};

const WEATHER_COLOR_MAP = {
  sunny: 'bg-weather-802',
  cloudy: 'bg-weather-802',
  gloomy: 'bg-neutral-200',
  rainy: 'bg-primary-100',
  snowy: 'bg-primary-100',
};

export default function MypolaContainer({ level, mileage, usernickname, equippedItem }: MypolaContainerProps) {
  const { position, isLoading: isGeolocationLoading } = useGeolocation();
  const { data: weather, isLoading: isWeatherLoading } = useWeather(position);

  return (
    <div className='flex flex-col justify-between items-center w-[314px] h-full pb-[82px] mx-auto'>
      <div
        className={`fixed top-[-150px] w-full h-[514px] z-[-9] rounded-b-full ${WEATHER_COLOR_MAP[weather || 'sunny']}`}
      />
      <div className='flex justify-between w-full'>
        <h1 className='flex flex-col justify-center items-start text-neutral-900 font-semibold text-[16px] select-none'>
          <p>
            <span className='text-primary-400'>{usernickname}</span>
            <span>님의 폴라가</span>
          </p>
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
      <div className='relative w-full h-[300px] flex flex-row justify-center items-end mb-[75px]'>
        <Mypola
          level={level}
          equippedItem={equippedItem}
        />
        <div className='w-[290px] h-[52px] bg-neutral-400 rounded-[50%] z-[0] translate-y-[26px] ' />
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
