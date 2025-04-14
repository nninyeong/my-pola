type ChallengeDetailProps = {
  title: string;
  description: string;
  tip: string;
};

const ChallengeDetail = ({ title, description, tip }: ChallengeDetailProps) => {
  return (
    <div className='flex flex-col justify-between items-center font-pretendard text-center h-[357px] mt-[5px]'>
      <h1 className='font-semibold text-[18px] mb-[8px]'>{title}</h1>
      <div className='h-[342px] flex flex-col justify-around'>
        <h3 className='font-medium text-[13px] mb-[13px] w-[313px]'>{description}</h3>
        <div className='w-[313px] h-[181px] bg-[#D9D9D9]' />
        <p className='mt-[10px] font-medium text-[12px] text-[#4A4A4A] mb-[9px] w-[313px]'>{tip}</p>
      </div>
      <p className='font-medium text-[10px] text-primary-400'>오늘의 챌린지는 하루 동안 변경할 수 없어요.</p>
    </div>
  );
};

export default ChallengeDetail;
