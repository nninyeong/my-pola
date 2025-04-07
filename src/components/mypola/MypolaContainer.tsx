'use client';

import { useWeather } from '@/hooks/queries/useWeather';
import { useGeolocation } from '@/hooks/user/useGeolocation';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';

export default function MypolaContainer() {
  const { position, isLoading: isGeolocationLoading, permissionState } = useGeolocation();
  const { data: weather, isLoading: isWeatherLoading } = useWeather(position);

  useEffect(() => {
    console.log('permissionState: ', permissionState);
  }, [permissionState, position]);

  console.log('MypolaContinaer 리렌더링');

  if (isGeolocationLoading || isWeatherLoading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  return (
    <div>
      <h1>현재 날씨: {weather}</h1>
    </div>
  );
}
