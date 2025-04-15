import { MAX_RANKING_COUNT } from '@/constants/ranking';
import { RankingUserType } from '@/types/ranking.types';
import { UserType } from '@/types/user.types';

export const processRankingDataForTotal = (ranking: UserType[], currentUserId: string): RankingUserType[] => {
  const topRanking = ranking.slice(0, MAX_RANKING_COUNT).map((user, index) => ({
    ...user,
    rank: index + 1,
  }));

  const currentUserRank = ranking.findIndex((user) => user.id === currentUserId);

  if (currentUserRank !== -1 && currentUserRank >= MAX_RANKING_COUNT) {
    topRanking[MAX_RANKING_COUNT - 1] = {
      ...ranking[currentUserRank],
      rank: currentUserRank + 1,
    };
  }

  return topRanking;
};
