import { Item } from '@/types/Item.types';
import Image from 'next/image';
import React from 'react';
type ItemProps = Item;

const StoreItemCard = ({ title, icon_url, price }: ItemProps) => {
  return (
    <div className='rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] min-w-[140px] desktop:min-w-[376px] h-[157px] desktop:h-[416px] shadow-primaryCustom'>
      <div className='bg-white rounded-[23px] h-full w-full pb-[10px] desktop:pb-[55px] pt-[22px] desktop:pt-[59px] flex flex-col items-center justify-around font-semibold text-neutral-900'>
        <div className='relative h-[87px] desktop:h-[322px] w-[100%] desktop:mb-[17px]'>
          <Image
            src={icon_url}
            alt={`${title} 아이콘`}
            fill
            className='object-cover'
          />
        </div>
        <h1 className='text-[12px] font-semibold desktop:text-[20px] desktop:leading-[35px]'>{title}</h1>
        <p className='text-[12px] font-medium desktop:text-[16px] desktop:leading-[35px]'>{price}P</p>
      </div>
    </div>
  );
};

export default StoreItemCard;
