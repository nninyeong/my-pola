import React from 'react';
import MyItemList from './MyItemList';
import { Item } from '@/types/Item.types';

type MyItemsProps = {
  myItems: Item[];
  equippedItemId: number;
  userId: string;
};
const MyItems = ({ myItems, equippedItemId, userId }: MyItemsProps) => {
  return (
    <section className='flex flex-col mb-[10px] gap-[28px]'>
      <div className='flex justify-between items-end font-semibold'>
        <h1 className='text-[20px]'>내 아이템</h1>
      </div>
      <MyItemList
        myItems={myItems}
        equippedItemId={equippedItemId}
        userId={userId}
      />
    </section>
  );
};

export default MyItems;
