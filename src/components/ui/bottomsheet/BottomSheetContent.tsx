'use client';
import { BottomSheetProps } from './BottomSheet';
import ConfirmButton from '../buttons/ConfirmButton';
import ChoiceButtons from '../buttons/ChoiceButtons';

const BottomSheetContent = ({ children, onClick, disabled, type, label }: BottomSheetProps) => {
  return (
    <>
      <section>{children}</section>
      <section className='flex mx-auto mb-[22px] mt-[10px]'>
        {type === 'confirm' ? (
          <ConfirmButton {...{ onClick, label, disabled }} />
        ) : (
          <ChoiceButtons {...{ onClick, label, disabled }} />
        )}
      </section>
    </>
  );
};

export default BottomSheetContent;
