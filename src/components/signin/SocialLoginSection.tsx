'use client';
import { handleGoogleSignIn, handleKakaoSignIn, handleNaverSignIn } from '@/utils/supabase/singIn';
import SocialLoginButton from './SocialLoginButton ';
import Image from 'next/image';
import Google from '/public/assets/images/signin/google.webp';
import Kakao from '/public/assets/images/signin/kakao.webp';
import Naver from '/public/assets/images/signin/naver.webp';

const SocialLoginSection = () => {
  return (
    <section className='flex flex-col items-center gap-[8px] pb-[50px]'>
      <div className='flex items-center w-[333px]'>
        <div className='flex-grow h-[0.8px] bg-black' />
        <p className='px-2 text-[10px] font-pretendard whitespace-nowrap leading-[35px]'>간편가입 및 로그인</p>
        <div className='flex-grow h-[0.8px] bg-black' />
      </div>
      <div className='flex flex-col gap-[8px]'>
        <SocialLoginButton
          onClick={handleNaverSignIn}
          color='bg-[#03C75A]'
        >
          <Image
            src={Naver}
            alt={`네이버 로고`}
            height={50}
            width={50}
            className='absolute left-0'
          />
          <p className='pl-[21px] text-white'>네이버 로그인</p>
        </SocialLoginButton>
        <SocialLoginButton
          onClick={handleKakaoSignIn}
          color='bg-[#FEE500]'
        >
          <Image
            src={Kakao}
            alt={`카카오 로고`}
            height={50}
            width={333}
          />
        </SocialLoginButton>
        <SocialLoginButton
          onClick={handleGoogleSignIn}
          color={null}
        >
          <Image
            src={Google}
            alt={`구글 로고`}
            height={28}
            width={28}
            className='absolute left-[11px]'
          />
          <p className='pl-[21px]'>구글 로그인</p>
        </SocialLoginButton>
      </div>
    </section>
  );
};

export default SocialLoginSection;
