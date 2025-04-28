import React from 'react';

export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='desktop:flex desktop:bg-neutral-200/[45%]'>
      <section className='desktop:hidden flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[151px] rounded-[59px] bg-primary-100 px-[41px] pb-[33px]'>
        <h1 className='pt-[60px] desktop:pt-[110px] text-[18px] font-semibold text-center leading-[35px]'>
          아이템 상점
        </h1>
      </section>
      <main className='desktop:h-full mt-[43px] flex flex-col gap-[48px] desktop:mx-auto desktop:w-desktop desktop:max-w-desktop desktop:px-[30px]'>
        {children}
      </main>
    </div>
  );
}
