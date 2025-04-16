import { useRouter } from 'next/navigation';
import { fetchCompletedChallenge } from '@/services/challenge/getChallenges';
import useModalStore from '@/stores/useModalStore';
import { Challenge } from '@/types/challenge.types';

export const useChallengeProofCheck = (todoChallenge: Challenge | null) => {
  const { open } = useModalStore();
  const router = useRouter();

  const handleChallengeProofCheck = async () => {
    if (!todoChallenge) return;

    const completedChallenge = await fetchCompletedChallenge();

    if (!completedChallenge) {
      router.push(`/challenge/${todoChallenge?.id}/proof`);
    } else {
      open();
    }
  };
  return { handleChallengeProofCheck };
};
