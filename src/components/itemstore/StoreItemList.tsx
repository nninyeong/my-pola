'use client';

import ItemCard from '@/components/itemstore/ItemCard';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import BottomSheet from '../ui/bottomsheet/BottomSheet';
import ConfirmItemPurchase from './ConfirmItemPurchase';

const StoreItemList = () => {
  const { open, close } = useBottomSheetStore();

  const MOCK_SELECTED_ITEM = {
    title: '오로라망토',
    description: '눈을 뗄 수 없는 핫 아이템',
    icon_url: '',
    image_url: '',
    price: 200,
  };

  return (
    <>
      <div className='flex gap-[13px] overflow-x-auto whitespace-nowrap min-h-[165px] -mr-[20px] first:pl-[2px] last:pr-[20px]'>
        <div onClick={open}>
          <ItemCard
            {...MOCK_SELECTED_ITEM}
            showPrice={true}
          />
        </div>
        <div onClick={open}>
          <ItemCard
            {...MOCK_SELECTED_ITEM}
            showPrice={true}
          />
        </div>
        <div onClick={open}>
          <ItemCard
            {...MOCK_SELECTED_ITEM}
            showPrice={true}
          />
        </div>
      </div>
      <BottomSheet
        onClick={() => {
          close();
          alert('구매');
        }}
        type='confirm'
        label='아이템 구매하기'
      >
        <ConfirmItemPurchase selectedItem={MOCK_SELECTED_ITEM} />
      </BottomSheet>
    </>
  );
};

export default StoreItemList;
