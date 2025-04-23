import React from 'react';

export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-full'>
      <div className='bg-white flex flex-col fixed w-[calc(100%+40px)] left-0 top-0 h-[81px]' />
      <main className='flex flex-col h-full'>{children}</main>
    </div>
  );
}
