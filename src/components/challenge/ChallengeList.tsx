import React from 'react';
import ChallengeCard from './ChallengeCard';

const ChallengeList = () => {
  return (
    <section className='mt-[196px]'>
      <h1 className='text-[18px] font-semibold'>데일리 에코 챌린지</h1>
      <p className='text-[12px] font-medium text-[#4A4A68]'>챌린지를 누르면 방법을 확인 할 수 있어요!</p>
      <div className='flex flex-col justify-center gap-[19px] mt-[15px]'>
        {/* TODO: map으로 변경할 것 */}
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </section>
  );
};

export default ChallengeList;
