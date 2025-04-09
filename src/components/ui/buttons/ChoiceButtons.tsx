import React from 'react';
import Button from './Button';
import { ActionProps } from '../bottomsheet/BottomSheet';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

const ChoiceButtons = ({ onClick, label }: ActionProps) => {
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
        size={'small'}
        variant={'primary'}
      >
        {label}
      </Button>
    </div>
  );
};

export default ChoiceButtons;
