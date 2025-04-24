'use client';
import Navigation from './Navigation';
import { useAuthStatus } from '@/hooks/auth/useAuthStatus';
import MenubarTitle from './MenubarTitle';
import UserSection from './UserSection';
import Image from 'next/image';
import MyPolaLogo from '/public/assets/images/mypola-logo.webp';

type NavigationProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

const Menubar = ({ isMenuOpen, toggleMenu }: NavigationProps) => {
  const { isSignedIn } = useAuthStatus();

  return (
    <div
      className={`
    ${isMenuOpen ? 'flex' : 'hidden'}
    fixed
    top-0
    right-0
    flex-col
    w-[281px]
    h-full
    bg-white
    shadow-lg
    z-10
   

    desktop:static
    desktop:flex
    desktop:flex-row
    desktop:w-full
    desktop:w-desktop
    desktop:h-[167px]
    desktop:justify-center
    desktop:items-center
    desktop:shadow-none
    desktop:bg-white
    desktop:fixed

  `}
    >
      <div className='hidden desktop:flex desktop:items-center desktop:h-[65px] desktop:w-[242px] relative desktop:mr-[145px]'>
        <Image
          src={MyPolaLogo}
          alt='마이폴라 로고'
          fill
          className='object-cover'
        />
      </div>

      <MenubarTitle
        isSignedIn={isSignedIn}
        toggleMenu={toggleMenu}
      />
      <Navigation
        isSignedIn={isSignedIn}
        toggleMenu={toggleMenu}
      />
      <UserSection isSignedIn={isSignedIn} />
    </div>
  );
};

export default Menubar;
