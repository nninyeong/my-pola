import { ActionProps } from '../bottomsheet/BottomSheet';
import Button from './Button';

const ConfirmButton = ({ onClick, label, disabled }: ActionProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size={'xlarge'}
      variant={'primary'}
    >
      {label}
    </Button>
  );
};

export default ConfirmButton;
