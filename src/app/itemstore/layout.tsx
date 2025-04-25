import React from 'react';

export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className='flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[151px] rounded-[59px] bg-primary-100 px-[41px] pb-[33px]'>
        <h1 className='pt-[72px] desktop:pt-[110px] text-[18px] font-semibold text-center'>아이템 상점</h1>
      </section>
      <main className='mt-[43px] flex flex-col gap-[48px]'>{children}</main>
    </div>
  );
}
