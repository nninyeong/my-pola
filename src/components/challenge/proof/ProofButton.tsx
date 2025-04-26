import Button from '@/components/ui/buttons/Button';
import InfoModal from '@/components/ui/modal/InfoModal';
import { useChallengeProofCheck } from '@/hooks/queries/useChallengeProofCheck';
import { Challenge } from '@/types/challenge.types';

type ProofButton = {
  todoChallenge: Challenge;
};

const ProofButton = ({ todoChallenge }: ProofButton) => {
  const { handleChallengeProofCheck } = useChallengeProofCheck(todoChallenge ?? null);

  return (
    <>
      <div className='mt-[83px] desktop:mt-[140px] desktop:mx-auto'>
        <Button
          onClick={handleChallengeProofCheck}
          size='xlarge'
          variant='primary'
        >
          인증하기
        </Button>
      </div>
      <InfoModal>
        <p className='font-semibold mb-[10px] desktop:text-[20px]'>오늘의 챌린지를 완료했습니다! </p>
      </InfoModal>
    </>
  );
};

export default ProofButton;
