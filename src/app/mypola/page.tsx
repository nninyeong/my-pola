import MypolaContainer from '@/components/mypola/MypolaContainer';
import FixedEllipseBackground from '@/components/background/FixedEllipseBackground';
import { getCurretnUserNickname } from '@/utils/supabase/user';

export default async function page() {
  const currentUserNickname = await getCurretnUserNickname();

  return (
    <div className='relative'>
      <h1 className='flex flex-col justify-center items-start text-neutral-1000 font-semibold text-[20px] select-none'>
        <span>{currentUserNickname}님의 폴라가</span>
        <span>성장하고 있어요!</span>
      </h1>
      <FixedEllipseBackground />
      <MypolaContainer />
    </div>
  );
}
