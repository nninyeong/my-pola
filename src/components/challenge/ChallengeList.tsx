import React from 'react';
import ChallengeCard from './ChallengeCard';
import { Challenge } from '@/types/challenge.types';

type ChallengeListProps = {
  challenges: Challenge[] | null;
  onSelectChallenge: (id: number) => void;
};

const ChallengeList = ({ challenges, onSelectChallenge }: ChallengeListProps) => {
  return (
    <section className='mt-[160px] desktop:mt-[120px]'>
      <h1 className='text-[18px] desktop:text-[40px] font-semibold leading-[35px] desktop:leading-[60px]'>
        데일리 에코 챌린지
      </h1>
      <p className='text-[12px] desktop:text-[20px] font-medium text-[#4A4A68] desktop:text-primary-400'>
        챌린지를 누르면 방법을 확인 할 수 있어요!
      </p>
      <div className='flex flex-col desktop:flex-row justify-center gap-[19px] desktop:gap-[139px] mt-[15px] desktop:mt-[93px]'>
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
