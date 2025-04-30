import { Item } from '@/types/Item.types';
import React from 'react';

type MyItemCardProps = Item & {
  isEquippedItem: boolean;
};

const MyItemCard = ({ title, description, icon_url, image_url, isEquippedItem }: MyItemCardProps) => {
  return (
    <div className='desktop:min-w-[376px] desktop:h-[416px] rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] min-w-[140px] h-[157px] shadow-primaryCustom'>
      <div className='desktop:pb-[55px] desktop:pt-[59px] relative bg-white rounded-[23px] h-full w-full pb-[10px] pt-[22px] flex flex-col items-center justify-around font-semibold text-neutral-900'>
        <div className='desktop:mb-[17px] desktop:h-[200px] desktop:w-[200px] h-[75px] w-[73px] rounded-full bg-[#d9d9d9]' />
        <h1 className='text-[12px] desktop:text-[20px] desktop:leading-[35px]'>{title}</h1>
        {isEquippedItem && (
          <p className='desktop:top-[20px] desktop:right-[20px] desktop:text-[15px] absolute top-[10px] right-[10px] text-[10px] text-primary-400'>
            착용중
          </p>
        )}
      </div>
    </div>
  );
};

export default MyItemCard;
