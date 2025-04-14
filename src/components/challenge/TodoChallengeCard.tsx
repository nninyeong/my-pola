import { Challenge } from '@/types/challenge.types';
import React from 'react';
import Button from '../ui/buttons/Button';
import { useRouter } from 'next/navigation';
import { fetchCompletedChallenge } from '@/services/challenge/getChallenges';
import useModalStore from '@/stores/useModalStore';
import Modal from '../ui/modal/Modal';

type TodoChallengeCardProps = {
  todoChallenge: Challenge | null;
  showProofButton: boolean;
};

const TodoChallengeCard = ({ todoChallenge, showProofButton }: TodoChallengeCardProps) => {
  const { open } = useModalStore();
  const router = useRouter();

  const handleChallengeProofCheck = async () => {
    const completedChallenge = await fetchCompletedChallenge();

    if (!completedChallenge) {
      router.push(`/challenge/${todoChallenge?.id}/proof`);
    } else {
      open();
    }
  };
  return (
    <>
      <div className='mt-[5px] w-[333px] h-[74px] px-[16px] py-[13px] border border-primary-400 rounded-[14px] shadow-custom bg-neutral-70'>
        <p className='text-[10px] font-medium text-neutral-900'>오늘의 챌린지</p>
        <div className='flex justify-between'>
          <h2 className='font-medium leading-[35px]'>
            {todoChallenge ? todoChallenge.title : '아직 참여중인 챌린지가 없습니다.'}
          </h2>
          {todoChallenge && showProofButton && (
            <Button
              onClick={handleChallengeProofCheck}
              size='small'
              variant='primary'
            >
              인증
            </Button>
          )}
        </div>
      </div>
      <Modal>
        <p className='font-semibold mb-[10px]'>오늘의 챌린지를 완료했습니다! </p>
      </Modal>
    </>
  );
};

export default TodoChallengeCard;
