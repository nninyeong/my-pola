'use client';
import gsap from 'gsap';
import { Observer } from 'gsap/dist/Observer';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function DesktopOnboarding() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Observer);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const sections = container.querySelectorAll('.animating-div');
    let currentIndex = 0;
    const sectionHeight = window.innerHeight - 167; // vh100 - 167px
    let isAnimating = false;

    // 초기 상태 설정
    sections.forEach((section, index) => {
      gsap.set(section, {
        opacity: index === 0 ? 1 : 0,
        y: index === 0 ? 0 : 100,
      });
    });

    const observer = Observer.create({
      target: container,
      type: 'wheel,touch',
      preventDefault: true,
      wheelSpeed: 0.5,
      tolerance: 50,
      lockAxis: true,
      onDown: () => {
        if (isAnimating || currentIndex >= sections.length - 1) return;
        isAnimating = true;
        observer.disable(); // 입력 막기 시작

        const nextIndex = currentIndex + 1;

        gsap.set(sections[nextIndex], { opacity: 0, y: 100 });

        gsap.to(sections[currentIndex], {
          opacity: 0,
          y: -100,
          duration: 0.8,
          ease: 'power2.inOut',
        });

        gsap.to(sections[nextIndex], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            currentIndex = nextIndex;
          },
        });

        container.scrollTo({
          top: nextIndex * sectionHeight,
          behavior: 'smooth',
        });

        setTimeout(() => {
          isAnimating = false;
          observer.enable(); // 일정 시간 후에 다시 입력 허용
        }, 1000); // 1초 후 허용 (원하는 시간으로 조정 가능)
      },
      onUp: () => {
        if (isAnimating || currentIndex <= 0) return;
        isAnimating = true;
        observer.disable(); // 입력 막기 시작

        const nextIndex = currentIndex - 1;

        gsap.set(sections[nextIndex], { opacity: 0, y: -100 });

        gsap.to(sections[currentIndex], {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'power2.inOut',
        });

        gsap.to(sections[nextIndex], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            currentIndex = nextIndex;
          },
        });

        container.scrollTo({
          top: nextIndex * sectionHeight,
          behavior: 'smooth',
        });

        setTimeout(() => {
          isAnimating = false;
          observer.enable(); // 일정 시간 후에 다시 입력 허용
        }, 1000); // 1초 후 허용 (원하는 시간으로 조정 가능)
      },
    });

    // 초기 스크롤 위치
    container.scrollTo(0, 0);

    return () => {
      observer.kill();
    };
  }, []);

  return (
    <div
      className='relative w-full h-full hidden desktop:block overflow-y-hidden'
      ref={containerRef}
    >
      <section className='w-full'>
        <div className='w-full h-[calc(100vh-167px)] bg-primary-100 animating-div'>
          <div className='flex flex-row justify-evenly items-center max-w-[1248px] mx-auto h-full'>
            <div>
              <h2 className='text-primary-500 text-[40px] font-semibold mb-[15px]'>마이폴라</h2>
              <div className='text-neutral-900 text-[24px] font-semibold'>
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
        <div className='flex flex-col justify-center items-center gap-[15px] max-w-[1248px] h-[calc(100vh-167px)] mx-auto py-[20px] animating-div'>
          <h2 className='text-neutral-1000 text-[36px] font-semibold'>마이폴라를 소개합니다.</h2>
          <div className='text-[20px] font-medium text-center'>
            <p>기후 행동의 필요성은 알지만, 실천이 어려웠다면?</p>
            <p>
              마이폴라와 함께 <span className='text-primary-400'>탄소 절감</span>을 더 즐겁게 시작해보세요!
            </p>
          </div>
          <div className='flex flex-row justify-evenly items-center w-full'>
            <Image
              src='/assets/images/onboarding/desktop-onboarding-1.png'
              alt='분리배출 실천하기'
              width={240}
              height={240}
              className='w-full h-full max-w-[240px] max-h-[240px] object-contain'
            />
            <Image
              src='/assets/images/onboarding/desktop-onboarding-2.png'
              alt='대중교통 이용하기'
              width={240}
              height={240}
              className='w-full h-full max-w-[240px] max-h-[240px] object-contain'
            />
            <Image
              src='/assets/images/onboarding/desktop-onboarding-3.png'
              alt='보온기능 사용 줄이기'
              width={240}
              height={240}
              className='w-full h-full max-w-[240px] max-h-[240px] object-contain'
            />
          </div>
        </div>
      </section>
      <section className='w-full bg-gradient-to-b from-primary-100 to-white'>
        <div className='flex flex-col justify-center items-center gap-[15px] max-w-[1248px] h-[calc(100vh-167px)] mx-auto py-[20px] animating-div'>
          <h2 className='text-neutral-1000 text-[36px] font-semibold'>데일리 챌린지에 도전해보세요!</h2>
          <div className='text-[20px] font-medium text-center'>
            <p>
              데일리 챌린지를 완료하면 나의 <span className='text-primary-400'>탄소 절감</span>을 알 수 있어요.
            </p>
            <p>챌린지를 성공하면 마일리지 Up!</p>
          </div>
          <div className='relative flex-1 w-full max-w-[1200px]'>
            <Image
              src='/assets/images/onboarding/desktop-onboarding-dailychallenge.png'
              alt='데일리 챌린지 소개'
              fill={true}
              className='object-contain'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-[15px] max-w-[1248px] h-[calc(100vh-167px)] mx-auto py-[20px] animating-div'>
          <h2 className='text-neutral-1000 text-[36px] font-semibold'>나만의 북극곰을 키워보세요!</h2>
          <div className='text-[20px] font-medium text-center'>
            <p>챌린지를 통해 얻은 마일리지로 북극곰 Level up!</p>
            <p>북극곰 레벨에 따라 포인트가 주어지고, 아이템을 구매해 나만의 북극곰으로 커스텀 할 수 있어요.</p>
          </div>
          <div className='relative flex-1 w-full max-w-[1200px]'>
            <Image
              src='/assets/images/onboarding/desktop-onboarding-mypola.png'
              alt='마이폴라 소개'
              fill={true}
              className='object-contain'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-[15px] max-w-[1248px] h-[calc(100vh-167px)] mx-auto py-[20px] animating-div'>
          <h2 className='text-neutral-1000 text-[36px] font-semibold'>친구와 함께 실천해보세요!</h2>
          <div className='text-[20px] font-medium text-center'>
            <p>친구를 추가하고 서로의 북극곰 레벨을 확인 할 수 있어요.</p>
            <p>친구와 함께 탄소 절감을 더욱 즐겁게!</p>
          </div>
          <div className='relative flex-1 w-full max-w-[1200px]'>
            <Image
              src='/assets/images/onboarding/desktop-onboarding-ranking.png'
              alt='랭킹 소개'
              fill={true}
              className='object-contain'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
