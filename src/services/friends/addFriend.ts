import { ADD_FRIEND_RESPONSE_MAP } from '@/constants/addFriendResponse';
import { createClient } from '@/utils/supabase/server';

export async function addFriend(
  currentUserId: string,
  friendId: string,
): Promise<{ status: keyof typeof ADD_FRIEND_RESPONSE_MAP; friendName?: string }> {
  const supabase = createClient();

  if (currentUserId === friendId) {
    return {
      status: 401,
    };
  }

  const { error } = await supabase.from('friendships').insert([
    { follower_id: currentUserId, followee_id: friendId },
    { follower_id: friendId, followee_id: currentUserId },
  ]);

  if (error) {
    console.error(error);

    if (error.code === '22P02') return { status: 404 };
    if (error.code === '23505') return { status: 400 };

    return {
      status: 500,
    };
  }

  const { data: friendName } = await supabase.from('users').select('nickname').eq('id', friendId).single();

  return {
    status: 200,
    friendName: friendName?.nickname,
  };
}
