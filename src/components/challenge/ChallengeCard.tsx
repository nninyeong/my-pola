'use client';

import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useActionModalStore from '@/stores/useActionModalStore';
import { Challenge } from '@/types/challenge.types';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

type ChallengeCardProps = {
  challenge: Challenge;
  onSelectChallenge: (id: number) => void;
};

const ChallengeCard = ({ challenge, onSelectChallenge }: ChallengeCardProps) => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const { open: openBottomSheet } = useBottomSheetStore();
  const { open: openActionModal } = useActionModalStore();

  return (
    <div
      onClick={() => {
        onSelectChallenge(challenge.id);
        if (isDesktop) {
          openActionModal();
        } else {
          openBottomSheet();
        }
      }}
      className='flex desktop:flex-col desktop:justify-center items-center gap-[9px] desktop:gap-[41px] w-[333px] desktop:w-[308px] h-[74px] desktop:h-[331px] desktop:p-0 desktop:pt-[30px] px-[16px] py-[13px] bg-[#CADEF5]/[0.39] desktop:bg-neutral-100/[75%] rounded-[14px] desktop:rounded-[45px] desktop:border desktop:border-primary-400  shadow-custom cursor-pointer'
    >
      <div className='relative flex w-[39px] h-[39px] desktop:w-[124px] desktop:h-[124px]'>
        <Image
          src={challenge.icon_url}
          alt={`${challenge.title} 아이콘`}
          fill
          className='object-cover'
        />
      </div>

      <p className='font-medium desktop:text-[20px] desktop:w-[149px] desktop:text-center desktop:h-[60px]'>
        {challenge.title}
      </p>
    </div>
  );
};

export default ChallengeCard;
