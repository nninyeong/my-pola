export default async function MypolaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='fixed top-[41px] left-0 w-full text-[18px] font-semibold text-center desktop:hidden'>마이폴라</h1>
      <div className='h-[calc(100dvh-85px)] desktop:h-full overflow-y-auto'>{children}</div>
    </>
  );
}
