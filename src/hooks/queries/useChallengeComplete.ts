import { updatedoneChallenge } from '@/services/challenge/updateChallenges';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import { Challenge } from '@/types/challenge.types';
import { useRouter } from 'next/navigation';

export const useChallengeComplete = (todoChallenge: Challenge | null) => {
  const { close } = useBottomSheetStore();
  const router = useRouter();

  const handleCompleteChallenge = async () => {
    if (!todoChallenge) return;

    await updatedoneChallenge(todoChallenge!.id);
    close();
    router.replace('/mypola');
  };

  return { handleCompleteChallenge };
};
