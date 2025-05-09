import { Challenge } from '@/types/challenge.types';
import TodoChallengeCard from '../TodoChallengeCard';

type ChallengeProofHeaderProps = {
  todoChallenge: Challenge | null;
};

const ChallengeProofHeader = ({ todoChallenge }: ChallengeProofHeaderProps) => {
  return (
    <section className='fixed desktop:relative flex flex-col z-10'>
      <div className='px-[3px]'>
        <h2 className='text-[16px] desktop:text-[36px] font-semibold desktop:leading-[55px]'>챌린지 인증</h2>
        <p className='text-[10px] desktop:text-[20px] desktop:leading-[35px] font-medium text-primary-400'>
          오늘의 챌린지는 하루 동안 변경할 수 없어요.
        </p>
      </div>
      <TodoChallengeCard
        todoChallenge={todoChallenge}
        showProofButton={false}
      />
    </section>
  );
};

export default ChallengeProofHeader;
