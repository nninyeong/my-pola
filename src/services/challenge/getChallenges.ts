import { challenge } from '@/types/challenge.types';
import { getUserInfo } from '@/utils/supabase/authClient';
import { createClient } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';

export const fetchChallenges = async (): Promise<challenge[] | null> => {
  const client = createClient();

  const { data, error } = await client.from('challenges').select('*');

  if (error) {
    console.error('챌린지 데이터를 불러오는데 실패했습니다.', error);
    return null;
  }

  return data;
};

export const updateCurrentChallenge = async (challenge: challenge) => {
  const client = createClient();

  const user = await getUserInfo();
  if (!user) {
    return redirect('/signin');
  }

  const { error } = await client.from('users').update({ current_challenge: challenge }).eq('id', user.id);

  if (error) {
    console.error('챌린지 데이터를 업데이트하는데 실패했습니다.', error);
  }
};
