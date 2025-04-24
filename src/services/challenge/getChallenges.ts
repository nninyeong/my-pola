import { getClientUser } from '@/utils/supabase/authClient';
import { createClient } from '@/utils/supabase/client';
import { Challenge } from '@/types/challenge.types';

export const fetchChallenges = async (): Promise<Challenge[] | null> => {
  const client = createClient();

  const { data, error } = await client.from('challenges').select('*');

  if (error) {
    console.error('챌린지 데이터를 불러오는데 실패했습니다.', error);
    return null;
  }

  return data;
};

export const fetchCurrentChallenge = async () => {
  const client = createClient();

  const user = await getClientUser();
  if (!user) return null;

  const { data, error } = await client
    .from('users')
    .select('current_challenge_id(*), challenge_updated_at')
    .eq('id', user.id)
    .maybeSingle();

  if (error) {
    console.error('오늘의 챌린지 데이터를 불러오는데 실패했습니다.', error);
    return null;
  }
  return data;
};

export const fetchCompletedChallenge = async () => {
  const client = createClient();

  const user = await getClientUser();
  if (!user) return null;

  const { data, error } = await client.from('users').select('done_challenge_id').eq('id', user.id).maybeSingle();

  if (error) {
    console.error('완료한 챌린지 데이터를 불러오는데 실패했습니다.', error);
    return null;
  }
  return data?.done_challenge_id;
};
