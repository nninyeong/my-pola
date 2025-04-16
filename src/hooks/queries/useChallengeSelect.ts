import { Challenge } from '@/types/challenge.types';
import { useState } from 'react';

export const useChallengeSelect = (challenges: Challenge[] | null) => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const onSelectChallenge = (id: number) => {
    if (!challenges) return;

    const selectChallenge = challenges.find((challenge) => challenge.id === id) ?? null;
    setSelectedChallenge(selectChallenge);
  };
  return { selectedChallenge, onSelectChallenge };
};
