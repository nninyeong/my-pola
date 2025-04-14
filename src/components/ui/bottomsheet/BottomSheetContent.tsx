'use client';
import { BottomSheetProps } from './BottomSheet';
import ConfirmButton from '../buttons/ConfirmButton';
import BottomSheetChoiceButtons from '../buttons/BottomSheetChoiceButtons';

const BottomSheetContent = ({ children, onClick, disabled, type, label }: BottomSheetProps) => {
  return (
    <>
      <section>{children}</section>
      <section className='flex mx-auto mb-[32px]'>
        {type === 'confirm' ? (
          <ConfirmButton {...{ onClick, label, disabled }} />
        ) : (
          <BottomSheetChoiceButtons {...{ onClick, label, disabled }} />
        )}
      </section>
    </>
  );
};

export default BottomSheetContent;
