import { createClient } from '@/utils/supabase/client';
import { getUserInfo } from '@/utils/supabase/authClient';

export const updateCurrentChallenge = async (id: number) => {
  const client = createClient();

  const user = await getUserInfo();
  if (!user) return null;

  const now = new Date().toISOString();

  const { error } = await client
    .from('users')
    .update({ current_challenge_id: id, challenge_updated_at: now })
    .eq('id', user.id);

  if (error) {
    console.error('챌린지 데이터를 업데이트하는데 실패했습니다.', error);
  }
};

export const resetDailyChallenge = async () => {
  const client = createClient();

  const user = await getUserInfo();
  if (!user) return null;

  const { error } = await client
    .from('users')
    .update({ current_challenge_id: null, challenge_updated_at: null, done_challenge_id: null })
    .eq('id', user.id);

  if (error) {
    console.error('챌린지 데이터를 업데이트하는데 실패했습니다.', error);
  }
};

export const updatedoneChallenge = async (id: number) => {
  const client = createClient();

  const user = await getUserInfo();
  if (!user) return null;

  const { data: userData, error: fetchError } = await client.from('users').select('mileage').eq('id', user.id).single();

  if (fetchError || !userData) {
    console.error('유저 정보를 가져오는데 실패했습니다.', fetchError);
    return;
  }

  const newMileage = userData.mileage + 100;

  const { error } = await client.from('users').update({ done_challenge_id: id, mileage: newMileage }).eq('id', user.id);

  if (error) {
    console.error('챌린지 데이터를 업데이트하는데 실패했습니다.', error);
  }
};
