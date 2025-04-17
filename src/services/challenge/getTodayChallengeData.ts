import { Challenge, CurrentChallenge } from '@/types/challenge.types';
import { fetchChallenges, fetchCurrentChallenge } from './getChallenges';
import { resetDailyChallenge } from './updateChallenges';
import { isSameDate } from '@/utils/date';

export const getTodayChallengeData = async () => {
  const [challenges, currentChallengeData] = await Promise.all([
    fetchChallenges(),
    fetchCurrentChallenge() as Promise<CurrentChallenge | null>,
  ]);

  let todoChallenge: Challenge | null = null;

  if (currentChallengeData?.challenge_updated_at) {
    const updatedDate = new Date(currentChallengeData?.challenge_updated_at);
    const now = new Date();
    if (isSameDate(updatedDate, now)) {
      todoChallenge = currentChallengeData.current_challenge_id ?? null;
    } else {
      todoChallenge = null;
      await resetDailyChallenge();
    }
  }
  return { challenges, todoChallenge };
};
