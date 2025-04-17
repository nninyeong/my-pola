import Ranking from '@/components/ranking/Ranking';
import { getCurrentUserData } from '@/utils/supabase/auth';

export default async function page() {
  const currentUser = await getCurrentUserData();

  return (
    <>
      <Ranking currentUser={currentUser} />
    </>
  );
}
