'use client';

import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MobileFixedEllipseBackground from '../background/MobileFixedEllipseBackground';
import Link from 'next/link';
import Button from '../ui/buttons/Button';

type MobileOnboardingProps = {
  isSignedIn: boolean;
};

const ONBOARDING_DATA: { description: string[]; image: string | null }[] = [
  {
    description: ['친환경 활동, 막연하게만 느껴지셨나요?'],
    image: '/assets/images/onboarding/mobile-onboarding-1.png',
  },
  {
    description: ['매일 하나의 챌린지를 선택하고 도전해보세요!'],
    image: '/assets/images/onboarding/mobile-onboarding-2.png',
  },
  {
    description: ['챌린지를 완수하면 나만의 북극곰이 쑥쑥!'],
    image: '/assets/images/onboarding/mobile-onboarding-3.png',
  },
  {
    description: ['친구와 함께 랭킹을 공유할 수 있어요!', '즐거운 친환경 행동, 시작해볼까요?'],
    image: '/assets/images/onboarding/mobile-onboarding-4.png',
  },
];

export default function MobileOnboarding({ isSignedIn }: MobileOnboardingProps) {
  SwiperCore.use([Navigation, Pagination]);
  const startButtonRoute = isSignedIn ? '/challenge' : '/signin';

  return (
    <div className='w-full h-full py-[30px] pb-[60px] desktop:hidden'>
      <Swiper
        loop={false}
        pagination={true}
        spaceBetween={0}
        slidesPerView={1}
        className='w-full h-full'
      >
        {ONBOARDING_DATA.map(({ description, image }, index) => (
          <SwiperSlide key={description[0]}>
            <div className='relative flex flex-col items-center justify-center gap-[30px] w-full h-full pb-[60px]'>
              <div className='flex flex-col justify-center items-center h-[70px] text-center text-[16px] font-semibold text-primary-500'>
                {description.map((text, i) => (
                  <p key={`onboarding-description-${i}`}>{text}</p>
                ))}
              </div>
              <div className='relative w-full h-[400px]'>
                {image && (
                  <Image
                    src={image}
                    alt={description[0]}
                    fill={true}
                    className='object-contain'
                  />
                )}
              </div>
              <div className='flex justify-center items-centerw-full h-[48px]'>
                {index === ONBOARDING_DATA.length - 1 && (
                  <Link href={startButtonRoute}>
                    <Button
                      size='medium'
                      variant='primary'
                    >
                      시작하기
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MobileFixedEllipseBackground />
    </div>
  );
}
