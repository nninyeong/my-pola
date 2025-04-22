'use client';
import React from 'react';
import Image from 'next/image';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import BottomSheetContent from './BottomSheetContent';

export type ActionProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export type BottomSheetProps = {
  children: React.ReactNode;
  type: 'confirm' | 'choice';
} & ActionProps;

const BottomSheet = ({ children, onClick, disabled, type, label }: BottomSheetProps) => {
  const { isOpen, close } = useBottomSheetStore();

  if (!isOpen) return null;

  return (
    <div className='flex desktop:hidden'>
      <div
        onClick={close}
        className='fixed inset-0 bg-black/30 z-0'
      />

      <div className='flex flex-col justify-between fixed bottom-0 left-0 bg-white w-full h-[502px] rounded-t-3xl z-1 py-[20px] px-[19px] transition-transform duration-300'>
        <div className='flex justify-end'>
          <Image
            src={CancelIcon}
            width={21}
            height={21}
            alt='취소 버튼'
            onClick={close}
            className='cursor-pointer'
          />
        </div>
        <BottomSheetContent {...{ children, onClick, disabled, type, label }} />
      </div>
    </div>
  );
};

export default BottomSheet;
