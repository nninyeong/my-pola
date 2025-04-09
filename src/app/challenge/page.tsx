'use client';
import Button from '@/components/ui/buttons/Button';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import ChallengeComplete from '@/components/challenge/ChallengeComplete';
import { useRouter } from 'next/navigation';

const ChallengePage = () => {
  const { close, open } = useBottomSheetStore();
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={open}
        size='large'
        variant='primary'
      >
        바텀시트
      </Button>
      <BottomSheet
        onClick={() => {
          close();
          router.replace('/mypola');
        }}
        label='마이폴라 바로가기'
      >
        <ChallengeComplete />
      </BottomSheet>
    </div>
  );
};

export default ChallengePage;
