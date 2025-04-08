export default function FixedEllipseBackground() {
  return (
    <div className='fixed inset-0 z-[-1] w-screen h-screen relative'>
      <div className='w-[70px] h-[70px] flex-shrink-0 absolute top-0 right-[42px] bg-gradient-to-b from-[#EDF046] to-[rgba(240,233,70,0.15)] blur-[50px]'></div>
      <div className='w-[70px] h-[70px] flex-shrink-0 absolute top-[126px] left-[-15px] bg-gradient-to-b from-[#46F080] to-[rgba(70,240,138,0.15)] blur-[50px]'></div>
      <div className='w-[60px] h-[60px] flex-shrink-0 absolute right-[-18px] top-[232px] bg-gradient-to-b from-[#2671CA] to-[rgba(37,85,255,0.25)] blur-[50px]'></div>
      <div className='w-[58px] h-[58px] flex-shrink-0 absolute left-[76px] bottom-[330px] bg-gradient-to-b from-[#46BDF0] to-[rgba(70,179,240,0.15)] blur-[50px]'></div>
      <div className='w-[58px] h-[58px] flex-shrink-0 absolute bottom-[-13px] right-[77px] bg-gradient-to-b from-[#F0B646] to-[rgba(240,203,70,0.15)] blur-[50px]'></div>
      <div className='w-[8px] h-[8px] flex-shrink-0 absolute top-[73px] right-[115px] bg-[#92DEFF] rounded-full'></div>
      <div className='w-[4px] h-[4px] flex-shrink-0 absolute top-[92px] right-[169px] bg-[#BE9FFF] rounded-full'></div>
      <div className='w-[8px] h-[8px] flex-shrink-0 absolute top-[391px] left-[138px] bg-[#FFD7E4] rounded-full'></div>
      <div className='w-[4px] h-[4px] flex-shrink-0 absolute top-[405px] left-[176px] bg-[#A4E7F9] rounded-full'></div>
      <div className='w-[8px] h-[8px] flex-shrink-0 absolute top-[383px] right-[117px] bg-[#EAED2A] rounded-full'></div>
      <div className='w-[4px] h-[4px] flex-shrink-0 absolute top-[362px] right-[90px] bg-[#7FFCAA] rounded-full'></div>
    </div>
  );
}
