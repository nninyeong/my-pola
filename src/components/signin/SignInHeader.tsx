import Image from 'next/image';
import Mypola from '/public/assets/images/signin/mypola.webp';

const SignInHeader = () => {
  return (
    <section className='flex flex-col items-center mb-[56px] desktop:mb-[40px]'>
      <h1 className='pt-[7px] desktop:pt-[137px] desktop:text-center desktop:text-[40px] desktop:leading-[50px] px-[3px] mb-[49px] desktop:mb-[96px] leading-[35px] font-pretendard font-semibold text-[24px]'>
        마이폴라와 함께
        <br />
        탄소 절감을 즐겁게 시작해보세요!
      </h1>
      <div className='relative flex w-[212px] h-[273px] desktop:w-[235px] desktop:h-[305px]'>
        <Image
          src={Mypola}
          alt='마이폴라'
          className='object-cover z-0'
        />
      </div>
    </section>
  );
};

export default SignInHeader;
