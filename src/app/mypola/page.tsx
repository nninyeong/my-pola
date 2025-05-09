import MypolaContainer from '@/components/mypola/MypolaContainer';
import MobileFixedEllipseBackground from '@/components/background/MobileFixedEllipseBackground';
import { getCurrentUserData } from '@/utils/supabase/auth';
import StoreLink from '@/components/mypola/StoreLink';
import DesktopMypolaContainer from '@/components/mypola/DesktopMypolaContainer';

export default async function page() {
  const { id, nickname, mileage, point, level } = await getCurrentUserData();

  return (
    <div className='relative flex flex-col h-full pt-[14px]'>
      <div className='block desktop:hidden'>
        <div className='flex justify-between items-start'>
          <h1 className='flex flex-col justify-center items-start text-neutral-900 font-semibold text-[16px] select-none'>
            <p>
              <span className='text-primary-400'>{nickname}</span>
              <span>님의 폴라가</span>
            </p>
            <span>성장하고 있어요!</span>
          </h1>
          <StoreLink point={point} />
        </div>
        <div className='flex-1 mt-[8px]'>
          <MypolaContainer
            id={id}
            level={level}
            mileage={mileage}
          />
        </div>
        <MobileFixedEllipseBackground />
      </div>
      <div className='hidden desktop:block w-full max-w-[1248px] h-full mx-auto py-[40px]'>
        <DesktopMypolaContainer
          id={id}
          level={level}
          mileage={mileage}
          usernickname={nickname}
          point={point}
        />
      </div>
    </div>
  );
}
