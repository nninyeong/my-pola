import { Item } from '@/types/Item.types';
import Image from 'next/image';

type ConfirmItemPurchaseProps = {
  selectedItem: Item;
};

const ConfirmItemPurchase = ({ selectedItem }: ConfirmItemPurchaseProps) => {
  return (
    <div className='flex flex-col items-center font-pretendard text-center'>
      <h1 className='font-semibold text-[24px] desktop:text-[26px] mb-[8px] desktop:mt-[15px]'>구매하시겠습니까?</h1>
      <div className='relative w-[100%] h-[181px]'>
        <Image
          src={selectedItem.image_url}
          alt={`${selectedItem.title} 착용샷`}
          fill
          className='object-contain'
        />
      </div>
      <h2 className='font-semibold text-[26px] text-primary-400'>{selectedItem.price}P</h2>
      <h3 className='mt-[18px] font-semibold text-[20px] text-neutral-900 leading-[27px] mb-[2px]'>
        {selectedItem.title}
      </h3>
      <p className='font-semibold text-[12px] text-neutral-700 leading-[27px] desktop:mb-[15px]'>
        {selectedItem.description}
      </p>
    </div>
  );
};

export default ConfirmItemPurchase;
