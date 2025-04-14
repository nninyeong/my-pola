import React from 'react';
import Button from './Button';
import { ActionProps } from '../bottomsheet/BottomSheet';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

const BottomSheetChoiceButtons = ({ onClick, label, disabled }: ActionProps) => {
  const { close } = useBottomSheetStore();

  return (
    <div className='flex gap-[81px]'>
      <Button
        onClick={close}
        size={'small'}
        variant={'primary'}
      >
        취소
      </Button>
      <Button
        onClick={onClick}
        disabled={disabled}
        size={'small'}
        variant={'primary'}
      >
        {label}
      </Button>
    </div>
  );
};

export default BottomSheetChoiceButtons;
