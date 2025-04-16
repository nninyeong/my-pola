import MypolaContainer from '@/components/mypola/MypolaContainer';
import FixedEllipseBackground from '@/components/background/FixedEllipseBackground';
import { getCurrentUserData } from '@/utils/supabase/auth';

export default async function page() {
  const { nickname, mileage, point, level } = await getCurrentUserData();

  return (
    <div className='relative flex flex-col h-full'>
      <div className='flex-1'>
        <MypolaContainer
          level={level}
          mileage={mileage}
          usernickname={nickname}
        />
      </div>
      <FixedEllipseBackground />
    </div>
  );
}
