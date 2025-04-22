'use client';

import UserProfileField from '@/components/mypage/UserProfileField';
import { useRouter } from 'next/navigation';

const MyPage = () => {
  const router = useRouter();

  return (
    <>
      <div
        className='flex justify-end'
        onClick={() => router.push('/mypage/edit-nickname')}
      >
        <p className='font-bold text-neutral-900 text-[10px] px-[12.5px] py-[11px] border border-primary-400 rounded-[10px]'>
          닉네임 수정하기
        </p>
      </div>
      <UserProfileField disabled={true} />
    </>
  );
};

export default MyPage;
