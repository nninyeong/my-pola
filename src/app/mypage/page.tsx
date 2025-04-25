'use client';

import UserProfileField from '@/components/mypage/UserProfileField';
import { useRouter } from 'next/navigation';

const MyPage = () => {
  const router = useRouter();

  return (
    <div className='relative w-[335px] mx-auto'>
      <div
        className='absolute right-0'
        onClick={() => router.push('/mypage/edit-nickname')}
      >
        <p className='bg-white font-bold text-neutral-900 text-[10px] px-[8px] py-[7px] border border-primary-400 rounded-[10px]'>
          닉네임 수정하기
        </p>
      </div>
      <UserProfileField disabled={true} />
    </div>
  );
};

export default MyPage;
