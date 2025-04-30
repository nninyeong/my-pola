import { Item } from '@/types/Item.types';
import React from 'react';
type ItemProps = Item;

const StoreItemCard = ({ title, description, icon_url, image_url, price }: ItemProps) => {
  return (
    <div className='rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] min-w-[140px] desktop:min-w-[376px] h-[157px] desktop:h-[416px] shadow-primaryCustom'>
      <div className='bg-white rounded-[23px] h-full w-full pb-[10px] desktop:pb-[55px] pt-[22px] desktop:pt-[59px] flex flex-col items-center justify-around font-semibold text-neutral-900'>
        <div className='h-[75px] desktop:h-[200px] w-[73px] desktop:w-[200px] rounded-full bg-[#d9d9d9] desktop:mb-[17px]' />
        <h1 className='text-[12px] font-semibold desktop:text-[20px] desktop:leading-[35px]'>{title}</h1>
        <p className='text-[12px] font-medium desktop:text-[16px] desktop:leading-[35px]'>{price}P</p>
      </div>
    </div>
  );
};

export default StoreItemCard;
