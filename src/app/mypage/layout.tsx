export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-full desktop:-mx-[20px]'>
      <h1 className='desktop:hidden fixed top-[47px] left-1/2 -translate-x-1/2 font-semibold text-[18px] leading-[35px]'>
        마이페이지
      </h1>
      <main className='pt-[64px] desktop:pt-[138px] desktop:mx-auto desktop:w-desktop desktop:bg-neutral-200/[40%] desktop:h-full'>
        {children}
      </main>
    </div>
  );
}
