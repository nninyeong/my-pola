'use client';
import Image from 'next/image';
import MenuIcon from '/public/assets/icons/MenuIcon.png';
import { useState } from 'react';
import Menubar from './Menubar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='relative desktop:flex desktop:justify-around desktop:items-center z-10'>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className='fixed inset-0 bg-black/30 backdrop-blur-sm z-0 desktop:hidden'
        />
      )}

      <div
        onClick={toggleMenu}
        className={`flex justify-end pt-[48px] pr-[21px] desktop:hidden z-5`}
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
