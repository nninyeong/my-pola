import MypolaContainer from '@/components/mypola/MypolaContainer';
import FixedEllipseBackground from '@/components/background/FixedEllipseBackground';
import { getCurrentUserData } from '@/utils/supabase/auth';

export default async function page() {
  const { nickname, mileage, point, level } = await getCurrentUserData();

  return (
    <div className='relative'>
      <h1 className='flex flex-col justify-center items-start text-neutral-1000 font-semibold text-[20px] select-none'>
        <span>{nickname}님의 폴라가</span>
        <span>성장하고 있어요!</span>
      </h1>
      <MypolaContainer
        level={level}
        mileage={mileage}
      />
      <FixedEllipseBackground />
    </div>
  );
}
