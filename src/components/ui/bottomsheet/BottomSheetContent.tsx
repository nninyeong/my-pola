'use client';
import { BottomSheetProps } from './BottomSheet';
import ConfirmButton from '../buttons/ConfirmButton';
import ChoiceButtons from '../buttons/ChoiceButtons';

const BottomSheetContent = ({ children, onClick, type, label }: BottomSheetProps) => {
  return (
    <>
      <section>{children}</section>
      <section className='flex mx-auto mb-[34px]'>
        {type === 'confirm' ? <ConfirmButton {...{ onClick, label }} /> : <ChoiceButtons {...{ onClick, label }} />}
      </section>
    </>
  );
};

export default BottomSheetContent;
