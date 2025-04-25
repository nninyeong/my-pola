import { Item } from '@/types/Item.types';

export const isPointSufficient = (item: Item | null, point: number) => {
  if (!item) return false;
  return point >= item.price;
};
