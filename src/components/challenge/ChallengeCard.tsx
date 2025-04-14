'use client';

import useBottomSheetStore from '@/stores/useBottomSheetStore';
import React from 'react';

import { Challenge } from '@/types/challenge.types';

type ChallengeCardProps = {
  challenge: Challenge;
  onSelectChallenge: (id: number) => void;
};

const ChallengeCard = ({ challenge, onSelectChallenge }: ChallengeCardProps) => {
  const { open } = useBottomSheetStore();

  return (
    <div
      onClick={() => {
        onSelectChallenge(challenge.id);
        open();
      }}
      className='flex items-center w-[333px] h-[74px] px-[16px] py-[13px] bg-[#CADEF5]/[0.39] rounded-[14px] shadow-custom cursor-pointer'
    >
      <p className='font-medium'>{challenge.title}</p>
    </div>
  );
};

export default ChallengeCard;
