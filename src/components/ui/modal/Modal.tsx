import Image from 'next/image';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import React from 'react';
import useModalStore from '@/stores/useModalStore';

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const { isOpen, close } = useModalStore();
  if (!isOpen) return null;

  return (
    <div className='flex justify-center'>
      <div
        onClick={close}
        className='fixed inset-0 bg-black/30 z-0'
      />
      <div className='flex flex-col justify-between top-[274px] fixed bg-white w-[304px] h-[185px] rounded-[20px] z-1 py-[16px] px-[17px]'>
        <section className='flex justify-end'>
          <Image
            src={CancelIcon}
            width={16}
            height={16}
            alt='취소 버튼'
            onClick={close}
            className='cursor-pointer'
          />
        </section>
        <section className='flex flex-grow justify-center items-center'>{children}</section>
      </div>
    </div>
  );
};

export default Modal;
