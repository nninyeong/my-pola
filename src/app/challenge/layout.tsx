import React from 'react';

export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='desktop:flex desktop:justify-center desktop:bg-primary-100/[36%] desktop:min-h-screen'>
      <section className='desktop:hidden flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[284px] rounded-[61px] bg-primary-100 px-[41px] pb-[33px] z-10'>
        <h1 className='pt-[72px] text-[18px] font-semibold text-center'>챌린지</h1>
      </section>
      <main className='mt-[30px] desktop:mt-[63px] flex flex-col h-full desktop:w-desktop desktop:px-[20px] mb-[50px]'>
        {children}
      </main>
    </div>
  );
}
