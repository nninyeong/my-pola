'use client';

import { Item } from '@/types/Item.types';
import { useStoreItems } from '@/hooks/queries/useStoreItems';
import StoreItemCard from '@/components/itemstore/StoreItemCard';

type StoreItemListProps = {
  onItemSelect: (item: Item) => void;
};

const StoreItemList = ({ onItemSelect }: StoreItemListProps) => {
  const { data: storeItems, isLoading } = useStoreItems();

  if (isLoading || !storeItems) return '로딩 중입니다...';

  return (
    <div className='flex gap-[13px] desktop:gap-[35px] overflow-x-auto whitespace-nowrap min-h-[165px] desktop:min-h-[429px] mr-[-20px] first:pl-[2px] last:pr-[20px]'>
      {storeItems.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemSelect(item)}
          className='cursor-pointer'
        >
          <StoreItemCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default StoreItemList;
