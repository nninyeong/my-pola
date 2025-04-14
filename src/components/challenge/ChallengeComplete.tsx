import Image from 'next/image';
import ChallengeCompleteImage from '/public/assets/images/ChallengeComplete.png';

const ChallengeComplete = () => {
  return (
    <div className='flex flex-col items-center font-pretendard text-center'>
      <h1 className=' font-semibold text-[20px] mb-[8px]'>
        챌린지 미션을 완료하고
        <br />총 100 마일리지 획득했어요!
      </h1>
      <Image
        src={ChallengeCompleteImage}
        height={181}
        width={260}
        alt='미션 완료 이미지'
      />
      <h3 className='mt-[10px] font-medium mb-[18px]'>100 마일리지</h3>
      <p className='font-medium text-[14px] text-neutral-900 mb-[9px]'>
        획득한 마일리지는
        <br />
        마이폴라에서 확인 가능합니다.
      </p>
    </div>
  );
};

export default ChallengeComplete;
