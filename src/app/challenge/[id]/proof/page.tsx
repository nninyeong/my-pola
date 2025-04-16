'use client';

import ChallengeComplete from '@/components/challenge/ChallengeComplete';
import CarbonEmissionResult from '@/components/challenge/proof/CarbonEmissionResult';
import ChallengeProofHeader from '@/components/challenge/proof/ChallengeProofHeader';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import useChallenge from '@/hooks/queries/useChallenge';
import { updatedoneChallenge } from '@/services/challenge/updateChallenges';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import { useRouter } from 'next/navigation';

const ChallengeProofPage = () => {
  const { close } = useBottomSheetStore();
  const { data, isLoading } = useChallenge();
  const router = useRouter();

  const handleCompleteChallenge = async () => {
    await updatedoneChallenge(data!.todoChallenge!.id);
    close();
    router.replace('/mypola');
  };

  if (isLoading || !data) return '로딩 중입니다..';
  return (
    <>
      <ChallengeProofHeader todoChallenge={data?.todoChallenge} />
      <CarbonEmissionResult todoChallenge={data?.todoChallenge} />

      <BottomSheet
        onClick={handleCompleteChallenge}
        disabled={false}
        type='confirm'
        label={`마이폴라 바로가기`}
      >
        <ChallengeComplete />
      </BottomSheet>
    </>
  );
};

export default ChallengeProofPage;
