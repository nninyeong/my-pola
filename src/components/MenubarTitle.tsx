'use client';
import { getClientUser } from '@/utils/supabase/authClient';
import { getUserNickname } from '@/utils/supabase/user';
import { useEffect, useState } from 'react';
import PrevIcon from '/public/assets/icons/PrevIcon.png';
import Image from 'next/image';

type MenubarTitleProps = {
  toggleMenu: () => void;
  isSignedIn: boolean;
};

const MenubarTitle = ({ isSignedIn, toggleMenu }: MenubarTitleProps) => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchNickname = async () => {
      const user = await getClientUser();
      if (user) {
        const nickname = await getUserNickname(user!.id);
        const trimmed = nickname.length > 10 ? nickname.slice(0, 10) + '...' : nickname;
        setNickname(trimmed);
      }
    };

    fetchNickname();
  }, []);

  return (
    <section className='flex items-end pl-[25px] pb-[23px] h-[120px] bg-primary-100 desktop:hidden'>
      <div className='flex items-center gap-[12px]'>
        <Image
          src={PrevIcon}
          width={12}
          height={22}
          alt='이전 버튼'
          onClick={toggleMenu}
        />
        <p className='font-pretendard font-semibold text-[17px] truncate max-w-[220px]'>
          {isSignedIn && nickname ? `${nickname}님 환영합니다!` : '로그인을 해주세요'}
        </p>
      </div>
    </section>
  );
};

export default MenubarTitle;
