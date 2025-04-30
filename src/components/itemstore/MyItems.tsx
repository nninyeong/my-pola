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
    <section className='flex flex-col gap-[28px] mb-[10px] desktop:mb-[50px]'>
      <div className='flex justify-between items-end font-semibold'>
        <h1 className='text-[18px] desktop:text-[40px]'>내 아이템</h1>
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
