import RankingFriendsPageTab from '@/components/ranking/RankingFriendsPageTab';

export default async function RankingFriendsTabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-full h-full'>
      <section className='flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[151px] rounded-[61px] bg-primary-100 px-[41px] pb-[33px] z-[2] desktop:hidden'>
        <h1 className='pt-[60px] text-[18px] font-semibold text-center leading-[35px]'>랭킹</h1>
      </section>
      <div className='fixed top-0 left-0 w-full h-[131px] bg-white z-[1] pointer-events-none' />
      <div className='relative flex flex-col w-full h-full mt-[46px] desktop:mt-0'>
        <div className='flex sticky top-[131px] w-full desktop:hidden'>
          <RankingFriendsPageTab href='/ranking' />
          <RankingFriendsPageTab href='/friends' />
        </div>
        <main className='flex flex-col flex-1 gap-[50px]'>{children}</main>
      </div>
    </div>
  );
}
