import { createClient } from '@/utils/supabase/client';

export const checkNicknameDuplicate = async (nickname: string) => {
  const client = createClient();
  const { data, error } = await client.from('users').select('id').eq('nickname', nickname).single();

  if (error && error.code !== 'PGRST116') {
    throw error;
  }

  return !!data;
};
