'use client';

import useBottomSheetStore from '@/stores/useBottomSheetStore';
import BottomSheet from '../ui/bottomsheet/BottomSheet';
import ConfirmItemPurchase from './ConfirmItemPurchase';
import { useState } from 'react';
import { Item } from '@/types/Item.types';
import { useStoreItems } from '@/hooks/queries/useStoreItems';
import StoreItemCard from '@/components/itemstore/StoreItemCard';
import { useUpdateMyItem } from '@/hooks/mutations/useUpdateMyItem';
import { isPointSufficient } from '@/services/itemstore/isPointSufficient';
import { isItemOwned } from '@/services/itemstore/isItemOwned';

type StoreItemListProps = {
  point: number;
  userId: string;
  myItems: Item[];
};

const StoreItemList = ({ point, userId, myItems }: StoreItemListProps) => {
  const { open, close } = useBottomSheetStore();
  const { data: storeItems, isLoading } = useStoreItems();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const { mutate: updateMyItem } = useUpdateMyItem(userId);

  const onClickHandler = (item: Item) => {
    updateMyItem(item);
    close();
  };

  if (isLoading || !storeItems) return '로딩 중입니다...';

  return (
    <>
      <div className='flex gap-[13px] overflow-x-auto whitespace-nowrap min-h-[165px] -mr-[20px] first:pl-[2px] last:pr-[20px]'>
        {storeItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
              open();
            }}
            className='cursor-pointer'
          >
            <StoreItemCard {...item} />
          </div>
        ))}
      </div>
      <BottomSheet
        onClick={() => onClickHandler(selectedItem!)}
        type='confirm'
        label='아이템 구매하기'
        disabled={!selectedItem || !isPointSufficient(selectedItem, point) || isItemOwned(selectedItem, myItems)}
      >
        {selectedItem && <ConfirmItemPurchase selectedItem={selectedItem} />}
      </BottomSheet>
    </>
  );
};

export default StoreItemList;
