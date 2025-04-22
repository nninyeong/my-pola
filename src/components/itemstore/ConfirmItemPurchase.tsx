import { Item } from '@/types/Item.types';

type ConfirmItemPurchaseProps = {
  selectedItem: Item;
};

const ConfirmItemPurchase = ({ selectedItem }: ConfirmItemPurchaseProps) => {
  return (
    <div className='flex flex-col items-center font-pretendard text-center'>
      <h1 className=' font-semibold text-[24px] mb-[8px]'>구매하시겠습니까?</h1>
      <div className='w-[260px] h-[181px] bg-[#D9D9D9]' />

      <h3 className='mt-[10px] font-medium text-[20px] mb-[18px]'>{selectedItem.title}</h3>
      <p className='font-medium text-[18px] text-[#4A4A4A] mb-[9px]'>{selectedItem.description}</p>
    </div>
  );
};

export default ConfirmItemPurchase;
