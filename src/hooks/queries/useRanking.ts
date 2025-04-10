import { RankingTap } from '@/types/ranking.types';
import { getRankingData } from '@/services/ranking/getRankingData';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';

export const useRanking = (currentTap: RankingTap) => {
  return useQuery({
    queryKey: QUERY_KEYS.ranking(currentTap),
    queryFn: getRankingData,
  });
};
