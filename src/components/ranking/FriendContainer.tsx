export default function FriendContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-full desktop:w-[364px] desktop:rounded-[40px] desktop:shadow-[4px_4px_4px_0px_rgba(0,0,0,0.15)] desktop:bg-white py-[4px] desktop:px-[20px] desktop:py-[27px] desktop:mt-[36px]'>
      <div className='hidden desktop:block'>
        <h2 className='text-[24px] text-neutral-1000 font-semibold mb-[12px]'>추가한 친구</h2>
      </div>
      {children}
    </div>
  );
}
