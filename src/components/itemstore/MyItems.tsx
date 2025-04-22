import React from 'react';
import MyItemList from './MyItemList';

const MyItems = () => {
  return (
    <section className='flex flex-col mb-[10px] gap-[28px]'>
      <div className='flex justify-between items-end font-semibold'>
        <h1 className='text-[20px]'>내 아이템</h1>
      </div>
      <MyItemList />
    </section>
  );
};

export default MyItems;
