import { createClient } from '@/utils/supabase/client';

export const checkNicknameDuplicate = async (nickname: string) => {
  const client = createClient();
  const { data, error } = await client.from('users').select('id').eq('nickname', nickname).maybeSingle();

  if (error) throw error;

  return !!data;
};
