import { updateCurrentChallenge } from '@/services/challenge/updateChallenges';
import { Challenge } from '@/types/challenge.types';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

export const useChallengeConfirm = (selectedChallenge: Challenge | null) => {
  const { close } = useBottomSheetStore();
  const queryClient = useQueryClient();

  const handleConfirmChallenge = async () => {
    if (!selectedChallenge) return;

    await updateCurrentChallenge(selectedChallenge.id);
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.challenge() });
    close();
  };

  return { handleConfirmChallenge };
};
