import { getRankingData } from '@/services/ranking/getRankingData';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';

export const useRanking = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ranking(),
    queryFn: getRankingData,
  });
};
