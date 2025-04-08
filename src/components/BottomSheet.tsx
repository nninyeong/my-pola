'use client';
import Image from 'next/image';
import Button from './ui/buttons/Button';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import React from 'react';

type BottomSheetProps = {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
};

const BottomSheet = ({ children, onClick, label }: BottomSheetProps) => {
  return (
    <>
      <div className='fixed inset-0 bg-black/30 z-0' />

      <div className='flex flex-col justify-between fixed bottom-0 bg-white w-[375px] h-[502px] rounded-t-3xl z-1 py-[20px] px-[19px]'>
        <section className='flex justify-end'>
          <Image
            src={CancelIcon}
            width={21}
            height={21}
            alt='취소 버튼'
            onClick={() => alert('취소')}
            className='cursor-pointer'
          />
        </section>
        <section>{children}</section>
        <section className='flex mx-auto mb-[34px]'>
          <Button
            onClick={onClick}
            size={'large'}
            variant={'primary'}
          >
            {label}
          </Button>
        </section>
      </div>
    </>
  );
};

export default BottomSheet;
