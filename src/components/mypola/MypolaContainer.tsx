'use client';

import { useWeather } from '@/hooks/queries/useWeather';
import { useGeolocation } from '@/hooks/user/useGeolocation';
import MileageBar from './MileageBar';
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
      <h1>현재 날씨: {weather}</h1>
      <h1>현재 레벨: {level}</h1>
      <h1>현재 마일리지: {mileage}</h1>
      <MileageBar
        mileage={mileage}
        level={level}
      />
    </div>
  );
}
