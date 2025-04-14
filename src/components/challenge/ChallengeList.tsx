import React from 'react';
import ChallengeCard from './ChallengeCard';
import { Challenge } from '@/types/challenge.types';

type ChallengeListProps = {
  challenges: Challenge[] | null;
  onSelectChallenge: (id: number) => void;
};

const ChallengeList = ({ challenges, onSelectChallenge }: ChallengeListProps) => {
  return (
    <section className='mt-[160px]'>
      <h1 className='text-[18px] font-semibold leading-[35px]'>데일리 에코 챌린지</h1>
      <p className='text-[12px] font-medium text-[#4A4A68]'>챌린지를 누르면 방법을 확인 할 수 있어요!</p>
      <div className='flex flex-col justify-center gap-[19px] mt-[15px]'>
        {challenges?.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            onSelectChallenge={onSelectChallenge}
          />
        ))}
      </div>
    </section>
  );
};

export default ChallengeList;
