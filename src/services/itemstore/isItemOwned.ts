import { Item } from '@/types/Item.types';

export const isItemOwned = (selectedItem: Item, myItems: Item[]) => {
  return myItems.some((item: Item) => item.id === selectedItem.id);
};
