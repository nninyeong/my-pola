import Image from 'next/image';

export default function DesktopOnboarding() {
  return (
    <div className='w-full h-full hidden desktop:block'>
      <section className='w-full'>
        <div className='w-full h-[837px] bg-primary-100'>
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
            <div className='relative w-[317px] h-[547px] flex flex-row justify-center items-end'>
              <Image
                src='/assets/images/mypola/mypola3.webp'
                alt='마이폴라'
                fill={true}
                className='object-contain z-[1]'
              />
              <div className='relative w-[290px] h-[52px] mb-[60px] bg-neutral-400 rounded-[50%] z-[0]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center max-w-[1920px] h-[837px]'>
          <h2 className='text-neutral-1000 text-[48px] font-semibold mb-[40px]'>마이폴라를 소개합니다.</h2>
          <div className='text-[24px] font-medium text-center mb-[100px]'>
            <p>기후 행동의 필요성은 알지만, 실천이 어려웠다면?</p>
            <p>
              마이폴라와 함께 <span className='text-primary-400'>탄소 절감</span>을 더 즐겁게 시작해보세요!
            </p>
          </div>
          <div className='flex flex-row justify-evenly items-center w-full'>
            <Image
              src='/assets/images/onboarding/desktop-onboarding-1.png'
              alt='분리배출 실천하기'
              width={308}
              height={331}
              className='object-contain'
            />
            <Image
              src='/assets/images/onboarding/desktop-onboarding-2.png'
              alt='대중교통 이용하기'
              width={308}
              height={331}
              className='object-contain'
            />
            <Image
              src='/assets/images/onboarding/desktop-onboarding-3.png'
              alt='보온기능 사용 줄이기'
              width={308}
              height={331}
              className='object-contain'
            />
          </div>
        </div>
      </section>
      <section className='w-full h-full bg-gradient-to-b from-primary-100 to-white'>
        <div className='flex flex-col justify-center items-center max-w-[1920px] h-[1690px]'>
          <h2 className='text-neutral-1000 text-[48px] font-semibold mb-[40px]'>데일리 챌린지에 도전해보세요!</h2>
          <div className='text-[24px] font-medium text-center mb-[100px]'>
            <p>
              데일리 챌린지를 완료하면 나의 <span className='text-primary-400'>탄소 절감</span>을 알 수 있어요.
            </p>
            <p>챌린지를 성공하면 마일리지 Up!</p>
          </div>
          <Image
            src='/assets/images/onboarding/desktop-onboarding-dailychallenge.png'
            alt='데일리 챌린지 소개'
            width={1200}
            height={834}
            className='object-contain'
          />
        </div>
        <div className='flex flex-col justify-center items-center max-w-[1920px] h-[1690px]'>
          <h2 className='text-neutral-1000 text-[48px] font-semibold mb-[40px]'>나만의 북극곰을 키워보세요!</h2>
          <div className='text-[24px] font-medium text-center mb-[100px]'>
            <p>챌린지를 통해 얻은 마일리지로 북극곰 Level up!</p>
            <p>북극곰 레벨에 따라 포인트가 주어지고, 아이템을 구매해 나만의 북극곰으로 커스텀 할 수 있어요.</p>
          </div>
          <Image
            src='/assets/images/onboarding/desktop-onboarding-mypola.png'
            alt='마이폴라 소개'
            width={1200}
            height={834}
            className='object-contain'
          />
        </div>
        <div className='flex flex-col justify-center items-center max-w-[1920px] h-[1690px]'>
          <h2 className='text-neutral-1000 text-[48px] font-semibold mb-[40px]'>친구와 함께 실천해보세요!</h2>
          <div className='text-[24px] font-medium text-center mb-[100px]'>
            <p>친구를 추가하고 서로의 북극곰 레벨을 확인 할 수 있어요.</p>
            <p>친구와 함께 탄소 절강믈 더욱 즐겁게!</p>
          </div>
          <Image
            src='/assets/images/onboarding/desktop-onboarding-ranking.png'
            alt='랭킹 소개'
            width={730}
            height={824}
            className='object-contain'
          />
        </div>
      </section>
    </div>
  );
}
