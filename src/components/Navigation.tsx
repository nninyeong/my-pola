import Link from 'next/link';

type NavigationProps = {
  isSignedIn: boolean;
  toggleMenu: () => void;
};

type NavLink = {
  href: string;
  label: string;
  className?: string;
};

const Navigation = ({ isSignedIn, toggleMenu }: NavigationProps) => {
  const baseLinks: NavLink[] = [
    { href: '/', label: '소개' },
    { href: '/challenge', label: '데일리 챌린지' },
    { href: '/mypola', label: '마이폴라' },
    { href: '/itemstore', label: '아이템 상점', className: 'desktop:hidden' },
    { href: '/ranking', label: '랭킹' },
  ];

  const authLinks: NavLink[] = isSignedIn
    ? [{ href: '/mypage', label: '마이페이지', className: 'desktop:hidden' }]
    : [];

  const links = [...baseLinks, ...authLinks];

  return (
    <nav className='flex flex-col font-pretendard font-semibold text-[18px] desktop:flex desktop:flex-row desktop:font-medium desktop:text-[32px] desktop:gap-[70px]'>
      {links.map(({ href, label, className = '' }) => (
        <Link
          key={href}
          href={href}
          className={`flex items-center border-b h-[56px] pl-[49px] ${className} desktop:border-none desktop:pl-0 desktop:h-auto desktop:w-auto`}
          onClick={toggleMenu}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
