import { RankingUserType } from '@/types/ranking.types';
import { UserType } from '@/types/user.types';
import { getUserFriends } from '@/utils/supabase/user';
import { MAX_RANKING_COUNT } from '@/constants/ranking';

export const processRankingDataForFriends = async (
  ranking: UserType[],
  currentUser: UserType,
): Promise<RankingUserType[]> => {
  const friends = await getUserFriends(currentUser.id);
  if (!friends || friends.length === 0) return [];

  const friendIds = new Set([currentUser.id, ...friends.map((friend) => friend.followee_id)]);
  const TOP_DISPLAY_COUNT = MAX_RANKING_COUNT - 1;

  const friendsRanking = ranking.filter((user) => friendIds.has(user.id));

  let friendRank = 0;
  return friendsRanking.reduce<RankingUserType[]>((rankedUsers, user) => {
    friendRank++;

    if (friendRank <= TOP_DISPLAY_COUNT) {
      rankedUsers.push({
        ...user,
        rank: friendRank,
      });
      return rankedUsers;
    }

    if (user.id === currentUser.id && friendRank > TOP_DISPLAY_COUNT) {
      rankedUsers.push({
        ...user,
        rank: friendRank,
      });
    } else if (rankedUsers.length < TOP_DISPLAY_COUNT) {
      rankedUsers.push({
        ...user,
        rank: friendRank,
      });
    }

    return rankedUsers;
  }, []);
};
