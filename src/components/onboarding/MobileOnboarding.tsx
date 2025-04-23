'use client';

import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FixedEllipseBackground from '../background/FixedEllipseBackground';

const ONBOARDING_DATA: { description: string; image: string | null }[] = [
  { description: '탄소 절감을 실천하기 어려우셨나요?', image: '/assets/images/onboarding/mobile-onboarding-1.png' },
  { description: '데일리 에코 챌린지를 완료하면', image: '/assets/images/onboarding/mobile-onboarding-2.png' },
  { description: '나만의 북극곰이 성장하고', image: '/assets/images/onboarding/mobile-onboarding-3.png' },
  { description: '친구와의 랭킹까지 확인할 수 있어요!', image: null }, // TODO: 은서님 확인 후 추가 or 없애기
];

export default function MobileOnboarding() {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div className='w-full h-full py-[30px] pb-[60px]'>
      <Swiper
        loop={false}
        pagination={true}
        spaceBetween={0}
        slidesPerView={1}
        className='w-full h-full'
      >
        {ONBOARDING_DATA.map(({ description, image }) => (
          <SwiperSlide key={description}>
            <div className='flex flex-col items-center justify-between w-full h-full pb-[60px]'>
              <p className='text-center text-[20px] font-semibold text-black'>{description}</p>
              <div className='relative w-full h-full'>
                {image && (
                  <Image
                    src={image}
                    alt={description}
                    fill={true}
                    className='object-contain'
                  />
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
