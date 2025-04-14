'use client';
import ChallengeHeader from '@/components/challenge/ChallengeHeader';
import ChallengeList from '@/components/challenge/ChallengeList';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import {
  fetchChallenges,
  fetchCurrentChallenge,
  resetDailyChallenge,
  updateCurrentChallenge,
} from '@/services/challenge/getChallenges';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

import { Challenge, CurrentChallenge } from '@/types/challenge.types';
import { isSameDate } from '@/utils/date';
import { useEffect, useState } from 'react';
import ChallengeDetail from '@/components/challenge/ChallengeDetail';

const ChallengePage = () => {
  const { close } = useBottomSheetStore();

  const [challenges, setChallenges] = useState<Challenge[] | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [todoChallenge, setTodoChallenge] = useState<Challenge | null>(null);

  useEffect(() => {
    const loadChallenges = async () => {
      const [challenges, currentChallengeData] = await Promise.all([
        fetchChallenges(),
        fetchCurrentChallenge() as Promise<CurrentChallenge | null>,
      ]);

      setChallenges(challenges);

      if (!currentChallengeData || !currentChallengeData.challenge_updated_at) {
        setTodoChallenge(null);
        return;
      }

      const updatedDate = new Date(currentChallengeData?.challenge_updated_at);
      const now = new Date();

      if (isSameDate(updatedDate, now)) {
        setTodoChallenge(currentChallengeData.current_challenge_id ?? null);
      } else {
        setTodoChallenge(null);
        await resetDailyChallenge();
      }
    };

    loadChallenges();
  }, []);

  const onSelectChallenge = (id: number) => {
    const selectChallenge = challenges?.find((challenge) => challenge.id === id) ?? null;
    setSelectedChallenge(selectChallenge);
  };

  const handleConfirmChallenge = async () => {
    if (!selectedChallenge) return;
    setTodoChallenge(selectedChallenge);
    await updateCurrentChallenge(selectedChallenge.id);
    close();
  };

  return (
    <>
      <ChallengeHeader todoChallenge={todoChallenge} />
      <ChallengeList
        challenges={challenges}
        onSelectChallenge={onSelectChallenge}
      />
      <BottomSheet
        onClick={handleConfirmChallenge}
        disabled={!!todoChallenge}
        type='confirm'
        label={`챌린지 등록`}
      >
        {selectedChallenge && <ChallengeDetail {...selectedChallenge} />}
      </BottomSheet>
    </>
  );
};

export default ChallengePage;
