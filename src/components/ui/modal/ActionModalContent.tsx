import ChoiceButtons from '../buttons/ChoiceButtons';
import ConfirmButton from '../buttons/ConfirmButton';
import { ActionModalProps } from './ActionModal';

const ActionModalContent = ({ children, onClick, disabled, type, label }: ActionModalProps) => {
  return (
    <>
      <section>{children}</section>
      <section className='flex mx-auto mt-[10px]'>
        {type === 'confirm' ? (
          <ConfirmButton {...{ onClick, label, disabled }} />
        ) : (
          <ChoiceButtons {...{ onClick, label, disabled }} />
        )}
      </section>
    </>
  );
};

export default ActionModalContent;
