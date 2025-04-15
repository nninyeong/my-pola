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

  return ranking.reduce<RankingUserType[]>((rankedUsers, user, currentIndex) => {
    const isFriendOrCurrentUser = friendIds.has(user.id);
    if (!isFriendOrCurrentUser) return rankedUsers;

    const currentRank = currentIndex + 1;

    if (currentRank <= TOP_DISPLAY_COUNT) {
      rankedUsers.push({
        ...user,
        rank: currentRank,
      });

      return rankedUsers;
    }

    if (user.id === currentUser.id && currentRank > TOP_DISPLAY_COUNT) {
      if (rankedUsers.length >= TOP_DISPLAY_COUNT) {
        rankedUsers.push({
          ...user,
          rank: currentRank,
        });
      } else {
        rankedUsers.push({
          ...user,
          rank: currentRank,
        });
      }
    } else if (rankedUsers.length < TOP_DISPLAY_COUNT) {
      rankedUsers.push({
        ...user,
        rank: currentRank,
      });
    }

    return rankedUsers;
  }, []);
};
