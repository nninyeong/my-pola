'use client';
import { handleGoogleSignIn, handleKakaoSignIn, handleNaverSignIn } from '@/utils/supabase/singIn';

const SigInPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='pt-[58px] px-[3px] mb-[49px] leading-[35px] font-pretendard font-semibold text-[24px]'>
        마이폴라와 함께
        <br />
        탄소 절감을 즐겁게 시작해보세요!
      </h1>
      <div className='w-[207px] h-[187px] bg-[#D9D9D9] mb-[57px]' />
      <section className='flex flex-col items-center gap-[8px]'>
        <div className='flex items-center w-full'>
          <div className='flex-grow h-[0.8px] bg-black' />
          <p className='px-2 text-[10px] font-pretendard whitespace-nowrap'>간편가입 및 로그인</p>
          <div className='flex-grow h-[0.8px] bg-black' />
        </div>
        <div className='flex flex-col gap-[8px]'>
          <button
            onClick={handleGoogleSignIn}
            className='w-[333px] h-[50px] rounded-[5px] border'
          >
            구글 로그인
          </button>
          <button
            onClick={handleKakaoSignIn}
            className='w-[333px] h-[50px] rounded-[5px] border'
          >
            카카오 로그인
          </button>
          <button
            onClick={handleNaverSignIn}
            className='w-[333px] h-[50px] rounded-[5px] border'
          >
            네이버 로그인
          </button>
        </div>
      </section>
    </div>
  );
};

export default SigInPage;
