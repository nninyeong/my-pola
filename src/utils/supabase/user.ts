import { getUserInfo } from './auth';
import { createClient } from './server';

export const getUserNickname = async (userId: string) => {
  const client = createClient();

  const { data, error } = await client.from('users').select('nickname').eq('id', userId).single();
  if (error) {
    console.error('Failed to fetch nickname:', error);
  }

  return data?.nickname ?? null;
};

export const getCurretnUserNickname = async () => {
  const userInfo = await getUserInfo();

  if (!userInfo) {
    console.error('일치하는 유저가 존재하지 않습니다.');
    return null;
  }

  return await getUserNickname(userInfo?.id);
};

export const getCurrentUserData = async () => {
  const client = createClient();

  const userInfo = await getUserInfo();
  if (!userInfo) {
    console.error('일치하는 유저가 존재하지 않습니다.');
    return null;
  }

  const { data, error } = await client.from('users').select('*').eq('id', userInfo.id).single();

  if (error) {
    console.error('유저 정보를 불러오는데 실패했습니다.', error);
    return null;
  }

  return data;
};
