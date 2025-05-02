import React from 'react';
import ChallengeCard from './ChallengeCard';
import { Challenge } from '@/types/challenge.types';

type ChallengeListProps = {
  challenges: Challenge[] | null;
  onSelectChallenge: (id: number) => void;
};

const ChallengeList = ({ challenges, onSelectChallenge }: ChallengeListProps) => {
  return (
    <section className='mt-[170px] desktop:mt-[120px] desktop:w-[1094px]'>
      <h1 className='text-[16px] desktop:text-[36px] font-semibold desktop:leading-[55px]'>데일리 에코 챌린지</h1>
      <p className='text-[10px] desktop:text-[20px] desktop:leading-[35px] font-medium text-primary-400'>
        챌린지를 누르면 방법을 확인 할 수 있어요!
      </p>
      <div className='flex flex-col desktop:flex-row justify-center gap-[19px] desktop:gap-[129px] mt-[15px] desktop:mt-[66px]'>
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
