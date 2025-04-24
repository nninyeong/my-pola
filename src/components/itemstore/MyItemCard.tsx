import { Item } from '@/types/Item.types';
import React from 'react';

type MyItemCardProps = Item & {
  isEquippedItem: boolean;
};

const MyItemCard = ({ title, description, icon_url, image_url, isEquippedItem }: MyItemCardProps) => {
  return (
    <div className='rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] min-w-[140px] h-[157px] shadow-primaryCustom'>
      <div className='relative bg-white rounded-[23px] h-full w-full pb-[10px] pt-[22px] flex flex-col items-center justify-around font-semibold text-neutral-900'>
        <div className='h-[75px] w-[73px] rounded-full bg-[#d9d9d9]' />
        <h1 className='text-[16px]'>{title}</h1>
        {isEquippedItem && <p className='absolute top-[10px] right-[10px] text-[10px] text-primary-400'>착용중</p>}
      </div>
    </div>
  );
};

export default MyItemCard;
