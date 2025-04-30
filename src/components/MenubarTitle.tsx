'use client';
import { getClientUser } from '@/utils/supabase/authClient';
import { getUserPoint } from '@/utils/supabase/user';
import { useEffect, useState } from 'react';
import PrevIcon from '/public/assets/icons/PrevIcon.png';
import Image from 'next/image';
import Link from 'next/link';
import useUserStore from '@/stores/useUserStore';

type MenubarTitleProps = {
  toggleMenu: () => void;
  isSignedIn: boolean;
};

const MenubarTitle = ({ isSignedIn, toggleMenu }: MenubarTitleProps) => {
  const { nickname } = useUserStore();
  const trimmed = nickname.length > 10 ? nickname.slice(0, 10) + '...' : nickname;

  const [point, setPoint] = useState(0);

  useEffect(() => {
    const fetchPoint = async () => {
      const user = await getClientUser();
      if (user) {
        const point = await getUserPoint(user.id);
        setPoint(point);
      }
    };

    fetchPoint();
  }, []);

  return (
    <section className='relative flex flex-col justify-end pl-[25px] pb-[39px] h-[120px] bg-primary-100 desktop:hidden'>
      <div className='flex items-center gap-[12px] h-[35px]'>
        <Image
          src={PrevIcon}
          width={12}
          height={22}
          alt='이전 버튼'
          onClick={toggleMenu}
          className='cursor-pointer'
        />
        <p className='font-pretendard font-semibold text-[17px] truncate max-w-[220px]'>
          {isSignedIn && nickname ? (
            `${trimmed}님 환영합니다!`
          ) : (
            <span className='inline-block'>
              <Link
                href={'/signin'}
                className='underline underline-offset-[5px] decoration-neutral-900'
                onClick={toggleMenu}
              >
                로그인
              </Link>
              <span>을 해주세요</span>
            </span>
          )}
        </p>
      </div>

      {isSignedIn && (
        <p className='absolute bottom-[23px] left-[49px] text-[11px] font-medium text-primary-400'>{point}P</p>
      )}
    </section>
  );
};

export default MenubarTitle;
