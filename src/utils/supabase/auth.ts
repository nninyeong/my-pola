import { createClient } from './server';

export const getIsSignedIn = async () => {
  const client = createClient();
  const {
    data: { session },
  } = await client.auth.getSession();
  return !!session;
};

export const getUserInfo = async () => {
  const client = createClient();
  const { data, error } = await client.auth.getUser();
  if (error) {
    console.error('Failed to fetch user: ', error);
  }

  return data?.user ?? null;
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
