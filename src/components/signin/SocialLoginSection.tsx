'use client';
import { handleGoogleSignIn, handleKakaoSignIn, handleNaverSignIn } from '@/utils/supabase/singIn';
import SocialLoginButton from './SocialLoginButton ';

const SocialLoginSection = () => {
  return (
    <section className='flex flex-col items-center gap-[8px]'>
      <div className='flex items-center w-[333px]'>
        <div className='flex-grow h-[0.8px] bg-black' />
        <p className='px-2 text-[10px] font-pretendard whitespace-nowrap leading-[35px]'>간편가입 및 로그인</p>
        <div className='flex-grow h-[0.8px] bg-black' />
      </div>
      <div className='flex flex-col gap-[8px]'>
        <SocialLoginButton
          onClick={handleNaverSignIn}
          label='네이버 로그인'
          color='bg-[#03CF5C]'
        />

        <SocialLoginButton
          onClick={handleKakaoSignIn}
          label='카카오 로그인'
          color='bg-[#FAE100]'
        />
        <SocialLoginButton
          onClick={handleGoogleSignIn}
          label='구글 로그인'
          color={null}
        />
      </div>
    </section>
  );
};

export default SocialLoginSection;
