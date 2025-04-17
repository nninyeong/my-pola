import React from 'react';

export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className='flex flex-col gap-[21px] fixed w-[calc(100%+40px)] left-[-20px] top-[-20px] h-[284px] rounded-[61px] bg-primary-100 px-[41px] pb-[33px]'>
        <h1 className='pt-[72px] desktop:pt-[110px] text-[18px] font-semibold text-center'>챌린지</h1>
      </section>
      <main className='mt-[30px] flex flex-col gap-[50px]'>{children}</main>
    </div>
  );
}
