import { getClientUser } from '@/utils/supabase/authClient';
import { createClient } from '@/utils/supabase/client';

export const updateNickname = async (nickname: string) => {
  const client = createClient();

  const user = await getClientUser();
  if (!user) return;

  const { error } = await client.from('users').update({ nickname }).eq('id', user.id);

  if (error) {
    console.error('닉네임 업데이트를 실패했습니다: ', error);
    return false;
  }

  return true;
};
