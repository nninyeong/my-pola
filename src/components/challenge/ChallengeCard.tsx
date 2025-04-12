import useBottomSheetStore from '@/stores/useBottomSheetStore';
import React from 'react';
import BottomSheet from '../ui/bottomsheet/BottomSheet';
import ChallengeComplete from './ChallengeComplete';

const ChallengeCard = () => {
  const { open, close } = useBottomSheetStore();
  return (
    <>
      <div
        onClick={open}
        className='flex items-center w-[333px] h-[74px] px-[16px] py-[13px] bg-[#CADEF5]/[0.39] rounded-[14px] shadow-custom cursor-pointer'
      >
        <p className='font-medium'>챌린지명</p>
      </div>
      <BottomSheet
        onClick={() => {
          close();
        }}
        label='챌린지 등록'
      >
        {/* TODO: 변경할 것 */}
        <ChallengeComplete />
      </BottomSheet>
    </>
  );
};

export default ChallengeCard;
