import Image from 'next/image';

type ChallengeDetailProps = {
  title: string;
  description: string;
  image_url: string;
  tip: string;
};

const ChallengeDetail = ({ title, description, image_url, tip }: ChallengeDetailProps) => {
  return (
    <div className='flex flex-col justify-between items-center font-pretendard text-center h-[357px] mt-[5px]'>
      <h1 className='font-semibold text-[20px] mb-[14px] leading-[35px]'>{title}</h1>
      <div className='h-[342px] flex flex-col items-center justify-around'>
        <h3 className='font-medium text-[12px] mb-[18px] w-[345px] leading-[20px]'>{`"${description}"`}</h3>
        <div className='w-[284px] h-[190px] relative'>
          <Image
            src={image_url}
            alt={`${title} 이미지`}
            fill
            className='object-contain'
          />
        </div>
        <p className='mt-[10px] font-medium text-[12px] mb-[9px] w-[345px]'>
          <span className='text-primary-400'>💡Tip</span>
          <span className='text-neutral-500'> {tip}</span>
        </p>
      </div>
      <p className='absolute bottom-0 font-medium text-[10px] text-primary-400 leading-[35px]'>
        오늘의 챌린지는 하루 동안 변경할 수 없어요.
      </p>
    </div>
  );
};

export default ChallengeDetail;
