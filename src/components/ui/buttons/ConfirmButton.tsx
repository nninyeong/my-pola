import { ActionProps } from '../bottomsheet/BottomSheet';
import Button from './Button';

const ConfirmButton = ({ onClick, label }: ActionProps) => {
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

export default ConfirmButton;
