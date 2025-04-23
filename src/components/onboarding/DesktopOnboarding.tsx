import Image from 'next/image';

export default function DesktopOnboarding() {
  return (
    <div className='w-full h-full hidden desktop:block'>
      <section className='w-full h-[837px] bg-primary-100'>
        <div className='flex flex-row justify-evenly items-center max-w-[1920px] mx-auto h-full'>
          <div>
            <h2 className='text-primary-500 text-[65px] font-semibold mb-[120px]'>마이폴라</h2>
            <div className='text-neutral-900 text-[40px] font-semibold'>
              <p>데일리 챌린지를 통해</p>
              <p>
                나만의 <span className='text-primary400'>폴라</span>를 성장시키며
              </p>
              <p>
                <span className='text-primary400'>탄소 절감</span>을 즐겁게 시작해보세요!
              </p>
            </div>
          </div>
          <div className='relative bg-red-100 w-[317px] h-[547px] flex flex-row justify-center items-end'>
            <Image
              src='/assets/images/mypola/mypola3.webp'
              alt='마이폴라'
              fill={true}
              className='object-contain z-[1]'
            />
            <div className='relative w-[210px] h-[52px] mb-[60px] z-[0]'>
              <Image
                src='/assets/images/mypola/mypola-shadow.webp'
                alt=''
                fill={true}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
