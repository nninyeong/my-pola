'use client';

import Image from 'next/image';

type FriendUrlCopyButtonProps = {
  currentUserId: string;
};

export default function FriendUrlCopyButton({ currentUserId }: FriendUrlCopyButtonProps) {
  const handleCopyFriendUrl = () => {
    const friendUrl = `${window.location.origin}/addFriend/${currentUserId}`;
    navigator.clipboard.writeText(friendUrl);

    // TODO: alert or 토스트 Or 모달 확인 필요
    alert('친구 추가 URL이 복사되었습니다.');
  };

  return (
    <button
      onClick={handleCopyFriendUrl}
      className='fixed bottom-[85px] left-1/2 -translate-x-1/2 bg-primary-300 w-[339px] desktop:w-[1200px] h-[68px] desktop:h-[164px] flex desktop:justify-center desktop:items-center rounded-[8px] desktop:rounded-[30px] desktop:px-[90px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
    >
      <Image
        src='/assets/icons/pola-head.webp'
        alt='마이폴라'
        width={237.37}
        height={241}
        className='object-cover w-[108.34px] h-[110px] desktop:w-[237.37px]'
      />
      <p className='flex flex-col justify-center items-center text-[14px] desktop:text-[32px] font-semibold text-neutral-100 desktop:w-[757px]'>
        <span>&apos;친구와 함께 탄소절감을 실천해보세요&apos;</span>
        <span>URL</span>
      </p>
    </button>
  );
}
