'use client';

import ChallengeComplete from '@/components/challenge/ChallengeComplete';
import CarbonEmissionResult from '@/components/challenge/proof/CarbonEmissionResult';
import ChallengeProofHeader from '@/components/challenge/proof/ChallengeProofHeader';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import { fetchCurrentChallenge, updatedoneChallenge } from '@/services/challenge/getChallenges';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import { Challenge, CurrentChallenge } from '@/types/challenge.types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ChallengeProofPage = () => {
  const { close } = useBottomSheetStore();
  const [todoChallenge, setTodoChallenge] = useState<Challenge | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadChallenges = async () => {
      const currentChallengeData = (await fetchCurrentChallenge()) as CurrentChallenge | null;

      setTodoChallenge(currentChallengeData?.current_challenge_id ?? null);
    };

    loadChallenges();
  }, []);

  const handleCompleteChallenge = async () => {
    await updatedoneChallenge(todoChallenge!.id);
    close();
    router.replace('/mypola');
  };
  return (
    <>
      <ChallengeProofHeader todoChallenge={todoChallenge} />
      <CarbonEmissionResult todoChallenge={todoChallenge} />

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
