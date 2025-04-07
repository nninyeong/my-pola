import { convertLatLngToGrid } from '@/utils/convertCoordinate';

export const QUERY_KEYS = {
  weather: (latitude: number, longitude: number) => ['weather', convertLatLngToGrid(latitude, longitude)],
};
