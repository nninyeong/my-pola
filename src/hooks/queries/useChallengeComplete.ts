import { updatedoneChallenge } from '@/services/challenge/updateChallenges';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useActionModalStore from '@/stores/useActionModalStore';
import { Challenge } from '@/types/challenge.types';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

export const useChallengeComplete = (todoChallenge: Challenge | null) => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const { close: closeBottomSheet } = useBottomSheetStore();
  const { close: closeActionModal } = useActionModalStore();
  const router = useRouter();

  const handleCompleteChallenge = async () => {
    if (!todoChallenge) return;

    await updatedoneChallenge(todoChallenge!.id);
    if (isDesktop) {
      closeActionModal();
    } else {
      closeBottomSheet();
    }
    router.replace('/mypola');
  };

  return { handleCompleteChallenge };
};
