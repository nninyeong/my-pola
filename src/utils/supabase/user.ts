import { createClient } from './client';
import { FolloweeUserType } from '@/types/user.types';

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
