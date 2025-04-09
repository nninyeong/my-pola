import { ActionProps } from '../bottomsheet/BottomSheet';
import Button from './Button';

const ConfirmButtons = ({ onClick, label }: ActionProps) => {
  return (
    <Button
      onClick={onClick}
      size={'xlarge'}
      variant={'primary'}
    >
      {label}
    </Button>
  );
};

export default ConfirmButtons;
