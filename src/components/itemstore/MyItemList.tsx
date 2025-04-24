'use client';
import { Item } from '@/types/Item.types';
import MyItemCard from './MyItemCard';
import UnequipItemCard from './UnequipItemCard';
import { useUpdateEquippedItem } from '@/hooks/mutations/useUpdateEquippedItem';

type MyItemListProps = {
  myItems: Item[];
  equippedItemId: number;
  userId: string;
};

const MyItemList = ({ myItems, equippedItemId, userId }: MyItemListProps) => {
  const { mutate: updateEquippedItem } = useUpdateEquippedItem(userId);

  const onClickHandler = (item: Item | null) => {
    updateEquippedItem(item);
  };

  return (
    <div>
      {myItems.length > 0 ? (
        <div className='flex gap-[13px] overflow-x-auto whitespace-nowrap min-h-[165px] -mr-[20px] first:pl-[2px] last:pr-[20px]'>
          <UnequipItemCard onClick={() => onClickHandler(null)} />
          {myItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onClickHandler(item)}
              className='cursor-pointer'
            >
              <MyItemCard
                {...item}
                isEquippedItem={equippedItemId === item.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] w-[339px] h-[157px] shadow-custom'>
          <div className='bg-white rounded-[23px] h-full w-full font-semibold text-neutral-900'>
            <p className='flex flex-col items-center justify-center text-[16px] h-full w-full bg-[#CADEF5]/[22%]'>
              아직 등록된 아이템이 없습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyItemList;
