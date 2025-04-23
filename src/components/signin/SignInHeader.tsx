import Image from 'next/image';
import Mypola from '/public/assets/images/signin/mypola.webp';

const SignInHeader = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1 className='pt-[7px] px-[3px] mb-[49px] leading-[35px] font-pretendard font-semibold text-[24px]'>
        마이폴라와 함께
        <br />
        탄소 절감을 즐겁게 시작해보세요!
      </h1>
      <Image
        src={Mypola}
        height={273}
        width={212}
        alt='마이폴라'
        className='mb-[56px]'
      />
    </section>
  );
};

export default SignInHeader;
