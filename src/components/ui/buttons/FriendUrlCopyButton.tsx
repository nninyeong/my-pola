'use client';

import Image from 'next/image';

type FriendUrlCopyButtonProps = {
  currentUserId: string;
};

export default function FriendUrlCopyButton({ currentUserId }: FriendUrlCopyButtonProps) {
  const handleCopyFriendUrl = () => {
    const friendUrl = `${window.location.origin}/friend/add/${currentUserId}`;
    navigator.clipboard.writeText(friendUrl);

    // TODO: alert or 토스트 Or 모달 확인 필요
    alert('친구 추가 URL이 복사되었습니다.');
  };

  return (
    <button
      onClick={handleCopyFriendUrl}
      className='fixed bottom-[85px] left-1/2 -translate-x-1/2 bg-primary-300 w-[339px] h-[68px] flex rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
    >
      <Image
        src='/assets/icons/pola-head.webp'
        alt='마이폴라'
        width={108.34}
        height={110}
        className='object-cover'
      />
      <p className='flex flex-col justify-center items-center text-[14px] font-semibold text-neutral-100'>
        <span>'친구와 함께 탄소절감을 실천해보세요'</span>
        <span>URL</span>
      </p>
    </button>
  );
}
