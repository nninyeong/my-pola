import { getClientUser } from '../../utils/supabase/authClient';
import { createClient } from '../../utils/supabase/client';
import { UserType } from '@/types/user.types';

export const getRankingData = async (): Promise<UserType[] | null> => {
  const client = createClient();

  const userInfo = getClientUser();
  if (!userInfo) {
    console.error('일치하는 유저가 존재하지 않습니다.');
    return null;
  }

  const { data, error } = await client
    .from('user_with_auth')
    .select('*')
    .order('mileage', { ascending: false })
    .order('level', { ascending: false })
    .order('last_sign_in_at', { ascending: false });

  if (error) {
    console.error('유저 정보를 불러오는데 실패했습니다.', error);
    return null;
  }

  return data;
};
