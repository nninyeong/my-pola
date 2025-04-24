import { convertLatLngToGrid } from '@/utils/convertCoordinate';

export const QUERY_KEYS = {
  authStatus: () => ['authStatus'],
  weather: (latitude: number, longitude: number) => ['weather', convertLatLngToGrid(latitude, longitude)],
  ranking: () => ['ranking'],
  challenge: () => ['challenge'],
  storItems: () => ['storeItems'],
  myItems: (userId?: string) => ['myItems', userId],
  equippedItemId: (userId?: string) => ['equippedItemId', userId],
  point: (userId?: string) => ['point', userId],
  clientUser: () => ['cleintUser'],
};
