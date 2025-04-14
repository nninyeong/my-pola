import { getClientUser } from '../../utils/supabase/authClient';
import { createClient } from '../../utils/supabase/client';
import { UserType } from '@/types/user.types';

export const getRankingData = async (): Promise<UserType[]> => {
  const client = createClient();

  const userInfo = getClientUser();
  if (!userInfo) throw new Error('일치하는 유저가 존재하지 않습니다.');

  const { data, error } = await client
    .from('user_with_auth')
    .select('*')
    .order('mileage', { ascending: false })
    .order('level', { ascending: false })
    .order('last_sign_in_at', { ascending: false });

  if (error) throw new Error('유저 정보를 불러오는데 실패했습니다.');

  if (!data) throw new Error('랭킹 정보가 없습니다.');

  return data;
};
