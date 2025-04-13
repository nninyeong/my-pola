import React from 'react';
import TodoChallengeCard from './TodoChallengeCard';
import { challenge } from '@/types/challenge.types';

type ChallengeHeaderProps = {
  todoChallenge: challenge | null;
};

const ChallengeHeader = ({ todoChallenge }: ChallengeHeaderProps) => {
  return (
    <section className='flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[284px] rounded-[61px] bg-primary-100 px-[41px] pb-[33px] pt-[72px] z-0'>
      <h1 className='text-[18px] font-semibold text-center'>챌린지</h1>
      <section>
        <div className='px-[3px]'>
          <h2 className='text-[18px] font-semibold'>내가 참여중인 챌린지</h2>
          <p className='text-[10px] font-medium text-primary-400'>오늘의 챌린지는 하루 동안 변경할 수 없어요.</p>
        </div>
        <TodoChallengeCard todoChallenge={todoChallenge} />
      </section>
    </section>
  );
};

export default ChallengeHeader;
