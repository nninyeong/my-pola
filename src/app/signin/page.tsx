'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { handleAuthCallback } from '@/utils/auth/authCallbackhandler';
import { handleGoogleSignIn, handleKakaoSignIn, handleNaverSignIn } from '@/utils/supabase/singIn';

const SigInPage = () => {
  const router = useRouter();

  useEffect(() => {
    handleAuthCallback(router);
  }, []);

  return (
    <div className='flex flex-col gap-10'>
      <button onClick={handleGoogleSignIn}>구글 로그인</button>
      <button onClick={handleKakaoSignIn}>카카오 로그인</button>
      <button onClick={handleNaverSignIn}>네이버 로그인</button>
    </div>
  );
};

export default SigInPage;
