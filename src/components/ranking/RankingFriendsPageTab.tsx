'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type RankingFriendsPageTabProps = {
  href: '/ranking' | '/friends';
};

export default function RankingFriendsPageTab({ href }: RankingFriendsPageTabProps) {
  const pathname = usePathname();
  const isCurrentPage = pathname.startsWith(href);

  return (
    <>
      {href === '/ranking' && (
        <Link
          href='/ranking'
          className={`text-[18px] font-semibold w-1/2 h-[52px] border-b-[2px] text-center leading-[52px] bg-white ${
            isCurrentPage && href === '/ranking'
              ? 'text-neutral-1000 border-primary-400'
              : 'text-neutral-1000/20 border-neutral-200'
          }`}
        >
          랭킹확인
        </Link>
      )}
      {href === '/friends' && (
        <Link
          href='/friends'
          className={`text-[18px] font-semibold w-1/2 h-[52px] border-b-[2px] text-center leading-[52px] bg-white ${
            isCurrentPage && href === '/friends'
              ? 'text-neutral-1000 border-primary-400'
              : 'text-neutral-1000/20 border-neutral-200'
          }`}
        >
          추가한 친구
        </Link>
      )}
    </>
  );
}
