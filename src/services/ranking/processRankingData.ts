import { UserType } from '@/types/user.types';

export type RankingUserType = UserType & {
  actualRank: number;
};

const MAX_RANKING_COUNT = 10;

export const processRankingData = (ranking: UserType[], currentUserId: string): RankingUserType[] => {
  const topRanking = ranking.slice(0, MAX_RANKING_COUNT).map((user, index) => ({
    ...user,
    actualRank: index + 1,
  }));

  const currentUserRank = ranking.findIndex((user) => user.id === currentUserId);

  if (currentUserRank !== -1 && currentUserRank >= MAX_RANKING_COUNT) {
    topRanking.push({
      ...ranking[currentUserRank],
      actualRank: currentUserRank + 1,
    });
  }

  return topRanking;
};
