import Ranking from '@/components/ranking/Ranking';
import FriendUrlCopyButton from '@/components/ui/buttons/FriendUrlCopyButton';
import { getCurrentUserData } from '@/utils/supabase/auth';

export default async function page() {
  const currentUser = await getCurrentUserData();

  return (
    <>
      <Ranking currentUser={currentUser} />
      <FriendUrlCopyButton currentUserId={currentUser?.id} />
    </>
  );
}
