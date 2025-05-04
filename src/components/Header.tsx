'use client';
import Image from 'next/image';
import MenuIcon from '/public/assets/icons/MenuIcon.png';
import { useEffect, useState } from 'react';
import Menubar from './Menubar';
import useActionModalStore from '@/stores/useActionModalStore';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isDesktop]);

  return (
    <header className='relative desktop:fixed desktop:top-0 desktop:left-0 desktop:z-[11]'>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className='fixed inset-0 bg-black/30 backdrop-blur-sm z-[12] desktop:hidden'
        />
      )}

      <div
        onClick={toggleMenu}
        className={`fixed right-0 top-[41px] pr-[21px] desktop:hidden z-[13] cursor-pointer`}
      >
        <Image
          src={MenuIcon}
          width={33}
          height={33}
          alt='모바일 메뉴바'
        />
      </div>

      <Menubar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;
