'use client';
import Image from 'next/image';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import { useEffect } from 'react';
import useActionModalStore from '@/stores/useActionModalStore';
import ActionModalContent from './ActionModalContent';

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
  const { isOpen, close } = useActionModalStore();

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
    <div className='hidden desktop:flex justify-center'>
      <div
        onClick={close}
        className='fixed inset-0 bg-black/30 z-10'
      />
      <div className='flex flex-col top-[150px] fixed bg-white w-[549px] h-[526px] rounded-[50px] z-30 py-[43px] px-[43px]'>
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
    </div>
  );
};

export default ActionModal;
