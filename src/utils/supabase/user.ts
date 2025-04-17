import { getClientUser } from './authClient';
import { createClient } from './client';
import { FolloweeUserType, UserType } from '@/types/user.types';

export const getUserNickname = async (userId: string) => {
  const client = createClient();

  const { data, error } = await client.from('users').select('nickname').eq('id', userId).single();
  if (error) {
    console.error('Failed to fetch nickname:', error);
  }

  return data?.nickname ?? null;
};

export const getUserFriends = async (userId: string): Promise<FolloweeUserType[]> => {
  const client = createClient();

  const { data, error } = await client.from('friendships').select('followee_id').eq('follower_id', userId);

  if (error) {
    console.error('친구 목록을 불러오는데 실패했습니다.', error);
    return [];
  }

  return data;
};

export const getUserFriendsData = async (): Promise<UserType[]> => {
  const client = createClient();
  const userInfo = await getClientUser();

  if (!userInfo) {
    console.error('사용자 정보를 불러오는데 실패했습니다.');
    return [];
  }

  const { id: userId } = userInfo;

  const friends = await getUserFriends(userId);
  const friendsData = await Promise.all(
    friends.map(async (friend) => {
      const { data } = await client.from('users').select('*').eq('id', friend.followee_id).single();
      return data;
    }),
  );

  return friendsData;
};
