import Button from './Button';
import { ActionProps } from '../bottomsheet/BottomSheet';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useActionModalStore from '@/stores/useActionModalStore';
import { useMediaQuery } from 'react-responsive';

const ChoiceButtons = ({ onClick, label, disabled }: ActionProps) => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const { close: closeBottomSheet } = useBottomSheetStore();
  const { close: closeActionModal } = useActionModalStore();

  const onClickHandler = () => {
    if (isDesktop) {
      closeActionModal();
    } else {
      closeBottomSheet();
    }
  };

  return (
    <div className='flex gap-[81px]'>
      <Button
        onClick={onClickHandler}
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

export default ChoiceButtons;
