import React from 'react';
import TodoChallengeCard from './TodoChallengeCard';
import { Challenge } from '@/types/challenge.types';

type ChallengeHeaderProps = {
  todoChallenge: Challenge | null;
};

const ChallengeHeader = ({ todoChallenge }: ChallengeHeaderProps) => {
  return (
    <section className='fixed desktop:relative flex flex-col z-10'>
      <div className='px-[3px]'>
        <h2 className='text-[18px] desktop:text-[40px] font-semibold'>내가 참여중인 챌린지</h2>
        <p className='text-[10px] desktop:text-[20px] font-medium text-primary-400'>
          오늘의 챌린지는 하루 동안 변경할 수 없어요.
        </p>
      </div>
      <TodoChallengeCard
        todoChallenge={todoChallenge}
        showProofButton={true}
      />
    </section>
  );
};

export default ChallengeHeader;
