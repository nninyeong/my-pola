import { convertLatLngToGrid } from '@/utils/convertCoordinate';
import { RankingTap } from '@/types/ranking.types';

export const QUERY_KEYS = {
  authStatus: () => ['authStatus'],
  weather: (latitude: number, longitude: number) => ['weather', convertLatLngToGrid(latitude, longitude)],
  ranking: (tap: RankingTap) => ['ranking', tap],
};
