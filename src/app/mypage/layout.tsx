export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='desktop:bg-neutral-200/[40%] desktop:mx-auto min-h-screen'>
      <h1 className='desktop:hidden fixed top-[47px] left-1/2 -translate-x-1/2 font-semibold text-[18px] leading-[35px]'>
        마이페이지
      </h1>
      <main className='pt-[64px] desktop:pt-[138px] desktop:w-desktop desktop:px-[20px]'>{children}</main>
    </div>
  );
}
