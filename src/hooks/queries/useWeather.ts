import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { determineWeatherState, fetchWeather } from '@/services/weather/getWeather';
import { Position } from '@/types/position.types';
import { DEFAULT_WEATHER_POSITION } from '@/constants/weatherApi.config';

export const useWeather = (position: Position | null) => {
  return useQuery({
    queryKey: QUERY_KEYS.weather(),
    queryFn: () => fetchWeather(position || DEFAULT_WEATHER_POSITION),
    select: determineWeatherState,
    retry: 1,
    staleTime: 1000 * 60 * 10,
  });
};
