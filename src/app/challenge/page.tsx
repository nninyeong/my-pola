'use client';
import ChallengeHeader from '@/components/challenge/ChallengeHeader';
import ChallengeList from '@/components/challenge/ChallengeList';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import ChallengeDetail from '@/components/challenge/ChallengeDetail';
import useChallenge from '@/hooks/queries/useChallenge';
import { useChallengeSelect } from '@/hooks/queries/useChallengeSelect';
import { useChallengeConfirm } from '@/hooks/queries/useChallengeConfirm';

const ChallengePage = () => {
  const { data, isLoading } = useChallenge();
  const { selectedChallenge, onSelectChallenge } = useChallengeSelect(data?.challenges ?? null);
  const { handleConfirmChallenge } = useChallengeConfirm(selectedChallenge);

  if (isLoading || !data) return '로딩 중입니다...';

  return (
    <>
      <ChallengeHeader todoChallenge={data.todoChallenge} />
      <ChallengeList
        challenges={data?.challenges}
        onSelectChallenge={onSelectChallenge}
      />
      <BottomSheet
        onClick={handleConfirmChallenge}
        disabled={!!data?.todoChallenge}
        type='confirm'
        label={`챌린지 등록`}
      >
        {selectedChallenge && <ChallengeDetail {...selectedChallenge} />}
      </BottomSheet>
    </>
  );
};

export default ChallengePage;
