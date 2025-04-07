'use client';
import Navigation from './Navigation';
import { useAuthStatus } from '@/hooks/auth/useAuthStatus';
import MenubarTitle from './MenubarTitle';

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
    flex-col
    w-[281px]
    h-screen
    absolute right-0 top-0 
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
    </div>
  );
};

export default Menubar;
