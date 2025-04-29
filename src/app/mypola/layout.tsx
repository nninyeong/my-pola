import React from 'react';

export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-full'>
      <section className='flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[284px] px-[41px] pb-[33px]'>
        <h1 className='pt-[60px] desktop:pt-[110px] text-[18px] font-semibold text-center leading-[35px]'>마이폴라</h1>
      </section>
      <main className='flex flex-col h-full'>{children}</main>
    </div>
  );
}
