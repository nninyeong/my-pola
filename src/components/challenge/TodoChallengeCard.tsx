import { Challenge } from '@/types/challenge.types';
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

type TodoChallengeCardProps = {
  todoChallenge: Challenge | null;
  showProofButton: boolean;
};

const TodoChallengeCard = ({ todoChallenge }: TodoChallengeCardProps) => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });

  return (
    <>
      <div className='mt-[5px] w-[333px] h-[74px] px-[16px] pt-[8px] border border-primary-400 rounded-[14px] shadow-custom bg-neutral-100/[75%] desktop:mt-[32px] desktop:w-[1094px] desktop:h-[164px] desktop:px-[42px] desktop:pt-[24px] desktop:rounded-[45px]'>
        {isDesktop ? (
          <>
            {todoChallenge ? (
              <div className='flex'>
                <Image
                  src={todoChallenge.icon_url}
                  alt={`${todoChallenge.title} 아이콘`}
                  width={113}
                  height={113}
                />
                <div className='flex flex-col pl-[15px] pt-[10px] gap-[5px]'>
                  <p className='text-[20px] font-medium text-neutral-900 pl-[2px] leading-[35px]'>오늘의 챌린지</p>
                  <h2 className='font-medium text-[32px] leading-[55px]'>{todoChallenge.title}</h2>
                </div>
              </div>
            ) : (
              <div className='flex flex-col pl-[15px] pt-[10px] gap-[5px]'>
                <p className='text-[20px] font-medium text-neutral-900 pl-[2px] leading-[35px]'>오늘의 챌린지</p>
                <h2 className='font-medium text-[32px] leading-[55px]'>아직 참여중인 챌린지가 없습니다.</h2>
              </div>
            )}
          </>
        ) : (
          <>
            <p className='text-[10px] font-medium text-neutral-900'>오늘의 챌린지</p>
            {todoChallenge ? (
              <div className='flex items-center gap-[9px]'>
                <Image
                  src={todoChallenge.icon_url}
                  alt={`${todoChallenge.title} 아이콘`}
                  width={45}
                  height={45}
                />
                <h2 className='font-medium leading-[35px]'>{todoChallenge.title}</h2>
              </div>
            ) : (
              <h2 className='font-medium leading-[35px]'>아직 참여중인 챌린지가 없습니다.</h2>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TodoChallengeCard;
