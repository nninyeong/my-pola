import Button from '../buttons/Button';
import { BottomSheetProps } from './BottomSheet';

const BottomSheetContent = ({ children, onClick, disabled, label }: BottomSheetProps) => {
  return (
    <>
      <section>{children}</section>
      <section className='flex mx-auto mb-[34px]'>
        <Button
          onClick={onClick}
          disabled={disabled}
          size={'xlarge'}
          variant={'primary'}
        >
          {label}
        </Button>
      </section>
    </>
  );
};

export default BottomSheetContent;
