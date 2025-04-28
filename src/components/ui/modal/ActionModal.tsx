'use client';
import Image from 'next/image';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import { useEffect } from 'react';
import useActionModalStore from '@/stores/useActionModalStore';
import ActionModalContent from './ActionModalContent';
import { useMediaQuery } from 'react-responsive';
import { createPortal } from 'react-dom';
import { getScrollbarWidth } from '@/utils/getScrollbarWidth';

export type ActionProps = {
  label: string;
  onClick: () => void;
  disabled: boolean | undefined;
};

export type ActionModalProps = {
  children: React.ReactNode;
  type: 'confirm' | 'choice';
} & ActionProps;

const ActionModal = ({ children, onClick, disabled, type, label }: ActionModalProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const { isOpen, close } = useActionModalStore();

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

  if (!isOpen || !isDesktop) return null;
  return createPortal(
    <>
      <div
        onClick={close}
        className='fixed inset-0 bg-black/30 z-10'
      />
      <div className='flex flex-col top-[150px] left-1/2 transform -translate-x-1/2 fixed bg-white w-[549px] h-[526px] rounded-[50px] z-30 py-[43px] px-[43px]'>
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
        <section className='flex flex-col justify-center items-center'>
          <ActionModalContent {...{ children, onClick, disabled, type, label }} />
        </section>
      </div>
    </>,
    document.body,
  );
};

export default ActionModal;
