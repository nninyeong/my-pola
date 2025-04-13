import { challenge } from '@/types/challenge.types';
import React from 'react';

type TodoChallengeCardProps = {
  todoChallenge: challenge | null;
};

const TodoChallengeCard = ({ todoChallenge }: TodoChallengeCardProps) => {
  return (
    <div className='mt-[5px] w-[333px] h-[74px] px-[16px] py-[13px] border border-primary-400 rounded-[14px] shadow-custom bg-neutral-70'>
      <p className='text-[10px] font-medium text-neutral-900'>오늘의 챌린지</p>
      <h2 className='font-medium leading-[35px]'>
        {todoChallenge ? todoChallenge.title : '아직 참여중인 챌린지가 없습니다.'}
      </h2>
    </div>
  );
};

export default TodoChallengeCard;
