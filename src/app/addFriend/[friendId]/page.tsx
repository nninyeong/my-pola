import { addFriend } from '@/services/friends/addFriend';
import { getCurrentUserData } from '@/utils/supabase/auth';
import { redirect } from 'next/navigation';

export default async function page({ params }: { params: { friendId: string } }) {
  const currentUser = await getCurrentUserData();
  const { friendId } = params;

  if (!currentUser) {
    redirect('/signin');
  }

  const { status, friendName } = await addFriend(currentUser.id, friendId);

  redirect(
    '/friends?friendStatus=' + encodeURIComponent(status) + '&friendName=' + encodeURIComponent(friendName ?? ''),
  );
}
