import RankingFriendsPageTab from '@/components/ranking/RankingFriendsPageTab';
import FriendUrlCopyButton from '@/components/ui/buttons/FriendUrlCopyButton';
import { getCurrentUserData } from '@/utils/supabase/auth';

export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUserData();

  return (
    <div className='flex flex-col w-full h-full'>
      <section className='flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[151px] rounded-[61px] bg-primary-100 px-[41px] pb-[33px] z-[-9] desktop:hidden'>
        <h1 className='pt-[60px] text-[18px] font-semibold text-center leading-[35px]'>랭킹</h1>
      </section>
      <div className='flex flex-col w-full h-full mt-[58px]'>
        <div className='flex w-full desktop:hidden'>
          <RankingFriendsPageTab href='/ranking' />
          <RankingFriendsPageTab href='/friends' />
        </div>
        <main className='flex flex-col flex-1 gap-[50px]'>{children}</main>
      </div>
      <FriendUrlCopyButton currentUserId={currentUser?.id} />
    </div>
  );
}
