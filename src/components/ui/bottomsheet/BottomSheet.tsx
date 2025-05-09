'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import CancelIcon from '/public/assets/icons/CancelIcon.png';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import BottomSheetContent from './BottomSheetContent';
import { AnimatePresence, motion } from 'framer-motion';

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

  const variants = {
    open: {
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    closed: {
      y: '100%',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='flex desktop:hidden'>
          <div
            onClick={close}
            className='fixed inset-0 bg-black/30 z-10'
          />

          <motion.div
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
            exit='closed'
            variants={variants}
            className='flex flex-col justify-between fixed bottom-0 left-0 bg-white w-full h-[502px] rounded-t-3xl z-[11] py-[20px] px-[19px]'
          >
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
