'use client';

import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FixedEllipseBackground from '../background/FixedEllipseBackground';
import Link from 'next/link';
import Button from '../ui/buttons/Button';

const ONBOARDING_DATA: { description: string; image: string | null }[] = [
  { description: '탄소 절감을 실천하기 어려우셨나요?', image: '/assets/images/onboarding/mobile-onboarding-1.png' },
  { description: '데일리 에코 챌린지를 완료하면', image: '/assets/images/onboarding/mobile-onboarding-2.png' },
  { description: '나만의 북극곰이 성장하고', image: '/assets/images/onboarding/mobile-onboarding-3.png' },
  { description: '친구와의 랭킹까지 확인할 수 있어요!', image: '/assets/images/onboarding/mobile-onboarding-4.png' },
];

export default function MobileOnboarding() {
  SwiperCore.use([Navigation, Pagination]);
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
          <SwiperSlide key={description}>
            <div className='relative flex flex-col items-center justify-center gap-[30px] w-full h-full pb-[60px]'>
              <p className='text-center text-[20px] font-semibold text-black'>{description}</p>
              <div className='relative w-full h-[400px]'>
                {image && (
                  <Image
                    src={image}
                    alt={description}
                    fill={true}
                    className='object-contain'
                  />
                )}
              </div>
              <div className='flex justify-center items-centerw-full h-[48px]'>
                {index === ONBOARDING_DATA.length - 1 && (
                  <Link href='/signin'>
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
      <FixedEllipseBackground />
    </div>
  );
}
