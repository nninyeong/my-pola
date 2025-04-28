export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='desktop:bg-neutral-200/[40%] desktop:mx-auto min-h-screen'>
      <section className='desktop:hidden fixed top-0 left-0 w-full h-[84px] bg-white z-10'>
        <h1 className='mt-[40px] flex items-cneter justify-center font-semibold text-[18px] leading-[35px]'>
          마이페이지
        </h1>
      </section>
      <main className='pt-[64px] desktop:pt-[138px] desktop:w-desktop desktop:px-[20px]'>{children}</main>
    </div>
  );
}
