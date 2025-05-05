import MypolaContainer from '@/components/mypola/MypolaContainer';
import MobileFixedEllipseBackground from '@/components/background/MobileFixedEllipseBackground';
import { getCurrentUserData } from '@/utils/supabase/auth';
import StoreLink from '@/components/mypola/StoreLink';
import DesktopMypolaContainer from '@/components/mypola/DesktopMypolaContainer';

export default async function page() {
  const { nickname, mileage, point, level, equipped_item_id } = await getCurrentUserData();

  return (
    <div className='relative flex flex-col h-full pt-[14px]'>
      <div className='block desktop:hidden'>
        <StoreLink point={point} />
        <div className='flex-1 mt-[8px]'>
          <MypolaContainer
            level={level}
            mileage={mileage}
            usernickname={nickname}
            equippedItem={equipped_item_id}
          />
        </div>
        <MobileFixedEllipseBackground />
      </div>
      <div className='hidden desktop:block w-full max-w-[1248px] h-full mx-auto'>
        <DesktopMypolaContainer
          level={level}
          mileage={mileage}
          usernickname={nickname}
          point={point}
          equippedItem={equipped_item_id}
        />
      </div>
    </div>
  );
}
