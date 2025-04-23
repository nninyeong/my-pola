export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className='fixed top-[47px] left-1/2 -translate-x-1/2 font-semibold text-[18px] leading-[35px]'>
        마이페이지
      </h1>
      <main className='pt-[64px]'>{children}</main>
    </div>
  );
}
