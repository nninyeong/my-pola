import Link from 'next/link';
import Image from 'next/image';

type StoreLinkProps = {
  point: number;
};

export default function StoreLink({ point }: StoreLinkProps) {
  return (
    <div className='flex justify-end items-center gap-[3px]'>
      <span className='text-primary-400 text-[16px] font-bold leading-[16px]'>{point}P</span>
      <Link
        href='/itemstore'
        title='아이템 상점'
      >
        <Image
          src='/assets/icons/store.png'
          alt='아이템 상점'
          width={18}
          height={16}
        />
      </Link>
    </div>
  );
}
