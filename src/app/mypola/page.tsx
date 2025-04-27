import MypolaContainer from '@/components/mypola/MypolaContainer';
import MobileFixedEllipseBackground from '@/components/background/MobileFixedEllipseBackground';
import { getCurrentUserData } from '@/utils/supabase/auth';
import StoreLink from '@/components/mypola/StoreLink';

export default async function page() {
  const { nickname, mileage, point, level } = await getCurrentUserData();

  return (
    <div className='relative flex flex-col h-full pt-[14px]'>
      <StoreLink point={point} />
      <div className='flex-1 mt-[8px]'>
        <MypolaContainer
          level={level}
          mileage={mileage}
          usernickname={nickname}
        />
      </div>
      <MobileFixedEllipseBackground />
    </div>
  );
}
