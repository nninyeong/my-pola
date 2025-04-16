type ChallengeDetailProps = {
  title: string;
  description: string;
  tip: string;
};

const ChallengeDetail = ({ title, description, tip }: ChallengeDetailProps) => {
  return (
    <div className='flex flex-col justify-between items-center font-pretendard text-center h-[357px] mt-[10px]'>
      <h1 className='font-semibold text-[20px] mb-[14px] leading-[35px]'>{title}</h1>
      <div className='h-[342px] flex flex-col items-center justify-around'>
        <h3 className='font-medium text-[12px] mb-[18px] w-[313px] leading-[20px]'>{`"${description}"`}</h3>
        <div className='w-[197px] h-[197px] bg-[#D9D9D9]' />
        <p className='mt-[10px] font-medium text-[12px] mb-[9px] w-[313px]'>
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
