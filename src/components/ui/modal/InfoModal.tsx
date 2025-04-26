'use client';
import Image from 'next/image';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import React, { useEffect } from 'react';
import useInfoModalStore from '@/stores/useInfoModalStore';

type MobileModalProps = {
  children: React.ReactNode;
};

const InfoModal = ({ children }: MobileModalProps) => {
  const { isOpen, close } = useInfoModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='flex justify-center'>
      <div
        onClick={close}
        className='fixed inset-0 bg-black/30 z-10'
      />
      <div className='flex flex-col justify-between top-[274px] fixed bg-white w-[304px] desktop:w-[549px] h-[185px] desktop:h-[430px] rounded-[20px] desktop:rounded-[45px] z-[11] py-[16px] desktop:py-[30px] desktop:px-[43px] px-[17px]'>
        <div className='flex justify-end'>
          <div className='absolute top-[33px] right-[43px]'>
            <Image
              src={CancelIcon}
              width={21}
              height={21}
              alt='취소 버튼'
              onClick={close}
              className='cursor-pointer'
            />
          </div>
        </div>
        <section className='flex flex-grow justify-center items-center'>{children}</section>
      </div>
    </div>
  );
};

export default InfoModal;
