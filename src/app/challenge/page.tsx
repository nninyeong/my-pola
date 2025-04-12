import ChallengeList from '@/components/challenge/ChallengeList';
import ChallengeHeader from '@/components/challenge/ChallengeHeader';

const ChallengePage = () => {
  return (
    <div className='flex flex-col'>
      <ChallengeHeader />
      <ChallengeList />
    </div>
  );
};

export default ChallengePage;
