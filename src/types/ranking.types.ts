import { UserType } from './user.types';

export type RankingTabType = 'total' | 'friend';

export type RankingUserType = UserType & {
  rank: number;
};

export type ProcessedRankingData = {
  original: UserType[];
  rankInTotal: RankingUserType[];
  rankInFriends: RankingUserType[];
};
