import { getRankingData } from '@/services/ranking/getRankingData';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { UserType } from '@/types/user.types';
import { processRankingData } from '@/services/ranking/processRankingData';

export const useRanking = (currentUserId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.ranking(),
    queryFn: getRankingData,
    select: (data: UserType[]) => ({
      original: data,
      processed: processRankingData(data, currentUserId),
    }),
  });
};
