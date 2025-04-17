import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { getTodayChallengeData } from '@/services/challenge/getTodayChallengeData';

const useChallenge = () => {
  return useQuery({
    queryKey: QUERY_KEYS.challenge(),
    queryFn: getTodayChallengeData,
  });
};

export default useChallenge;
