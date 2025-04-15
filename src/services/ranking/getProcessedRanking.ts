import { UserType } from '@/types/user.types';
import { getRankingData } from './getRankingData';
import { processRankingDataForFriends } from './processRankingDataForFriends';
import { ProcessedRankingData } from '@/types/ranking.types';
import { processRankingDataForTotal } from './processRankingDataForTotal';

export const getProcessedRanking = async (currentUser: UserType): Promise<ProcessedRankingData> => {
  const data = await getRankingData();
  const rankInFriends = await processRankingDataForFriends(data, currentUser);

  return {
    original: data,
    rankInTotal: processRankingDataForTotal(data, currentUser.id),
    rankInFriends,
  };
};
