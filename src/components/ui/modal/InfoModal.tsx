'use client';
import Image from 'next/image';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import React, { useEffect } from 'react';
import useInfoModalStore from '@/stores/useInfoModalStore';
import { useMediaQuery } from 'react-responsive';
import { getScrollbarWidth } from '@/utils/getScrollbarWidth';
import { createPortal } from 'react-dom';

type MobileModalProps = {
  children: React.ReactNode;
};

const InfoModal = ({ children }: MobileModalProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const { isOpen, close } = useInfoModalStore();

  useEffect(() => {
    if (isOpen && isDesktop) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, isDesktop]);

  if (!isOpen) return null;

  return createPortal(
    <div className='flex justify-center'>
      <div
        onClick={close}
        className='fixed inset-0 bg-black/30 z-20'
      />
      <div className='flex top-1/3 left-1/2 transform -translate-x-1/2 fixed bg-white w-[304px] desktop:w-[549px] h-[160px] desktop:h-[430px] rounded-[20px] desktop:rounded-[45px] z-30 py-[16px] desktop:py-[30px] desktop:px-[43px] px-[17px]'>
        <div className='absolute top-[14px] right-[17px] desktop:top-[33px] desktop:right-[43px]'>
          <div className='relative w-[16px] h-[16px] desktop:w-[21px] desktop:h-[21px]'>
            <Image
              src={CancelIcon}
              alt='취소 버튼'
              fill
              onClick={close}
              className='object-cover cursor-pointer'
            />
          </div>
        </div>
        <section className='flex flex-grow justify-center items-center'>{children}</section>
      </div>
    </div>,
    document.body,
  );
};

export default InfoModal;
