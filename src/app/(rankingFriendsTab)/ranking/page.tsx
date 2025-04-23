import FriendsList from '@/components/ranking/FriendsList';
import Ranking from '@/components/ranking/Ranking';
import { getCurrentUserData } from '@/utils/supabase/auth';

export default async function page() {
  const currentUser = await getCurrentUserData();

  return (
    <>
      <div className='desktop:hidden'>
        <Ranking currentUser={currentUser} />
      </div>
      <div className='hidden desktop:flex flex-col justify-start items-center bg-primary-100/70 h-full pt-[80px]'>
        <div className='w-[1200px] flex flex-col justify-center items-start'>
          <h2 className='text-[40px] font-semibold text-neutral-1000 w-full'>랭킹 확인</h2>
          <p className='text-[20px] font-medium text-primary-400 w-full'>나와 친구들의 랭킹을 확인해보세요!</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-[48px] w-[1200px]'>
          <Ranking currentUser={currentUser} />
          <FriendsList />
        </div>
      </div>
    </>
  );
}
