'use client';
import Navigation from './Navigation';
import { useAuthStatus } from '@/hooks/auth/useAuthStatus';
import MenubarTitle from './MenubarTitle';
import UserSection from './UserSection';
import Image from 'next/image';
import MyPolaLogo from '/public/assets/images/mypola-logo.webp';
import useActionModalStore from '@/stores/useActionModalStore';
import useInfoModalStore from '@/stores/useInfoModalStore';
import { useMediaQuery } from 'react-responsive';
import { getScrollbarWidth } from '@/utils/getScrollbarWidth';
import { motion } from 'framer-motion';

type NavigationProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

const Menubar = ({ isMenuOpen, toggleMenu }: NavigationProps) => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const { isOpen: isOpenActionModal } = useActionModalStore();
  const { isOpen: isOpenInfoModal } = useInfoModalStore();
  const { isSignedIn } = useAuthStatus();

  const variants = {
    open: { x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    closed: { x: '100%', transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const actualOpenState = isDesktop ? true : isMenuOpen;

  return (
    <motion.div
      initial='closed'
      animate={actualOpenState ? 'open' : 'closed'}
      exit='closeds'
      variants={variants}
      className='
      fixed
      top-0
      right-0
      flex-col
      w-[281px]
      h-full
      bg-white
      shadow-lg
      z-[13]

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
      '
      style={
        isDesktop && (isOpenActionModal || isOpenInfoModal) ? { paddingRight: `${getScrollbarWidth()}px` } : undefined
      }
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
    </motion.div>
  );
};

export default Menubar;
