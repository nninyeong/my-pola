'use client';
import ChallengeHeader from '@/components/challenge/ChallengeHeader';
import ChallengeList from '@/components/challenge/ChallengeList';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import { Challenge } from '@/types/challenge.types';
import { useState } from 'react';
import ChallengeDetail from '@/components/challenge/ChallengeDetail';
import useChallenge from '@/hooks/queries/useChallenge';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { updateCurrentChallenge } from '@/services/challenge/updateChallenges';

const ChallengePage = () => {
  const { close } = useBottomSheetStore();
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const { data, isLoading } = useChallenge();
  const queryClient = useQueryClient();

  const onSelectChallenge = (id: number) => {
    const selectChallenge = data?.challenges?.find((challenge) => challenge.id === id) ?? null;
    setSelectedChallenge(selectChallenge);
  };

  const handleConfirmChallenge = async () => {
    if (!selectedChallenge) return;
    await updateCurrentChallenge(selectedChallenge.id);
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.challenge() });
    close();
  };

  if (isLoading || !data) return '로딩 중입니다...';

  return (
    <>
      <ChallengeHeader todoChallenge={data.todoChallenge} />
      <ChallengeList
        challenges={data?.challenges}
        onSelectChallenge={onSelectChallenge}
      />
      <BottomSheet
        onClick={handleConfirmChallenge}
        disabled={!!data?.todoChallenge}
        type='confirm'
        label={`챌린지 등록`}
      >
        {selectedChallenge && <ChallengeDetail {...selectedChallenge} />}
      </BottomSheet>
    </>
  );
};

export default ChallengePage;
