'use client';
import Navigation from './Navigation';
import { useAuthStatus } from '@/hooks/auth/useAuthStatus';
import MenubarTitle from './MenubarTitle';
import UserSection from './UserSection';

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
    desktop:h-[80px]
    desktop:justify-center
    desktop:shadow-none
    desktop:bg-white/30
    desktop:fixed

  `}
    >
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
