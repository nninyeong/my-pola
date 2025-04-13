'use client';
import ChallengeComplete from '@/components/challenge/ChallengeComplete';
import ChallengeHeader from '@/components/challenge/ChallengeHeader';
import ChallengeList from '@/components/challenge/ChallengeList';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import { fetchChallenges, updateCurrentChallenge } from '@/services/challenge/getChallenges';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

import { challenge } from '@/types/challenge.types';
import { useEffect, useState } from 'react';

const ChallengePage = () => {
  const { close } = useBottomSheetStore();

  const [challenges, setChallenges] = useState<challenge[] | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<challenge | null>(null);
  const [todoChallenge, setTodoChallenge] = useState<challenge | null>(null);

  useEffect(() => {
    const loadChallenges = async () => {
      const challenges = await fetchChallenges();
      setChallenges(challenges);
    };

    loadChallenges();
  }, []);

  const onSelectChallenge = (id: number) => {
    console.log(id);
    const selectChallenge = challenges?.find((challenge) => challenge.id === id) ?? null;
    setSelectedChallenge(selectChallenge);
  };

  const handleConfirmChallenge = async () => {
    if (!selectedChallenge) return;
    setTodoChallenge(selectedChallenge);
    await updateCurrentChallenge(selectedChallenge);
    close();
  };

  return (
    <>
      <div className='flex flex-col'>
        <ChallengeHeader todoChallenge={todoChallenge} />
        <ChallengeList
          challenges={challenges}
          onSelectChallenge={onSelectChallenge}
        />
      </div>
      <BottomSheet
        onClick={handleConfirmChallenge}
        label={`챌린지 등록`}
      >
        {/* TODO: 해당 챌린지로 변경할 것 */}
        {selectedChallenge && <ChallengeComplete />}
      </BottomSheet>
    </>
  );
};

export default ChallengePage;
