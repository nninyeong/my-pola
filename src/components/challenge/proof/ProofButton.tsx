import Button from '@/components/ui/buttons/Button';
import Modal from '@/components/ui/modal/Modal';
import { useChallengeProofCheck } from '@/hooks/queries/useChallengeProofCheck';
import { Challenge } from '@/types/challenge.types';

type ProofButton = {
  todoChallenge: Challenge;
};

const ProofButton = ({ todoChallenge }: ProofButton) => {
  const { handleChallengeProofCheck } = useChallengeProofCheck(todoChallenge ?? null);

  return (
    <>
      <div className='mt-[83px] mb-[50px]'>
        <Button
          onClick={handleChallengeProofCheck}
          size='xlarge'
          variant='primary'
        >
          인증하기
        </Button>
      </div>
      <Modal>
        <p className='font-semibold mb-[10px]'>오늘의 챌린지를 완료했습니다! </p>
      </Modal>
    </>
  );
};

export default ProofButton;
