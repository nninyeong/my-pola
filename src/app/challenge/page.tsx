'use client';
import Button from '@/components/ui/buttons/Button';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';

const ChallengePage = () => {
  const { open } = useBottomSheetStore();
  return (
    <div>
      <Button
        onClick={open}
        size='large'
        variant='primary'
      >
        바텀시트
      </Button>
      <BottomSheet />
    </div>
  );
};

export default ChallengePage;
