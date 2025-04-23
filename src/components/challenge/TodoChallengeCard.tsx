import { Challenge } from '@/types/challenge.types';
import React from 'react';
import Button from '../ui/buttons/Button';

import { useChallengeProofCheck } from '@/hooks/queries/useChallengeProofCheck';
import Image from 'next/image';

type TodoChallengeCardProps = {
  todoChallenge: Challenge | null;
  showProofButton: boolean;
};

const TodoChallengeCard = ({ todoChallenge, showProofButton }: TodoChallengeCardProps) => {
  return (
    <>
      <div className='mt-[5px] w-[333px] h-[74px] px-[16px] py-[13px] border border-primary-400 rounded-[14px] shadow-custom bg-neutral-70'>
        <p className='text-[10px] font-medium text-neutral-900'>오늘의 챌린지</p>
        {todoChallenge ? (
          <div className='flex items-center gap-[9px]'>
            <Image
              src={todoChallenge.icon_url}
              alt={`${todoChallenge.title} 아이콘`}
              height={39}
              width={39}
            />
            <h2 className='font-medium leading-[35px]'>{todoChallenge.title}</h2>
          </div>
        ) : (
          <h2 className='font-medium leading-[35px]'>아직 참여중인 챌린지가 없습니다.</h2>
        )}
      </div>
    </>
  );
};

export default TodoChallengeCard;
