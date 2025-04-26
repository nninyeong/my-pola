import { updateCurrentChallenge } from '@/services/challenge/updateChallenges';
import { Challenge } from '@/types/challenge.types';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import { useRouter } from 'next/navigation';
import useActionModalStore from '@/stores/useActionModalStore';
import { useMediaQuery } from 'react-responsive';

export const useChallengeConfirm = (selectedChallenge: Challenge | null) => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const { close: closeBottomSheet } = useBottomSheetStore();
  const { close: closeActionpModal } = useActionModalStore();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleConfirmChallenge = async () => {
    if (!selectedChallenge) return;

    await updateCurrentChallenge(selectedChallenge.id, router);
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.challenge() });

    if (isDesktop) {
      closeActionpModal();
    } else {
      closeBottomSheet();
    }
  };

  return { handleConfirmChallenge };
};
