import { Challenge } from '@/types/challenge.types';
import TodoChallengeCard from '../TodoChallengeCard';

type ChallengeProofHeaderProps = {
  todoChallenge: Challenge | null;
};

const ChallengeProofHeader = ({ todoChallenge }: ChallengeProofHeaderProps) => {
  return (
    <section className='fixed flex flex-col gap-[15px] z-5'>
      <h2 className='px-[3px] text-[18px] font-semibold'>챌린지 인증</h2>
      <TodoChallengeCard
        todoChallenge={todoChallenge}
        showProofButton={false}
      />
    </section>
  );
};

export default ChallengeProofHeader;
