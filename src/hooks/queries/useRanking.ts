import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { UserType } from '@/types/user.types';
import { getProcessedRanking } from '@/services/ranking/getProcessedRanking';

export const useRanking = (currentUser: UserType) => {
  return useQuery({
    queryKey: QUERY_KEYS.ranking(),
    queryFn: () => getProcessedRanking(currentUser),
  });
};
