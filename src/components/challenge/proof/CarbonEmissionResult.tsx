import Image from 'next/image';
import WinGiftsImage from '/public/assets/images/WinGifts.png';
import { Challenge } from '@/types/challenge.types';
import Button from '@/components/ui/buttons/Button';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useActionModalStore from '@/stores/useActionModalStore';
import { useMediaQuery } from 'react-responsive';

type CarbonEmissionResultProps = {
  todoChallenge: Challenge | null;
};
const CarbonEmissionResult = ({ todoChallenge }: CarbonEmissionResultProps) => {
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const { open: openBottomSheet } = useBottomSheetStore();
  const { open: openActionModal } = useActionModalStore();

  const onClickHandler = () => {
    if (isDesktop) {
      openActionModal();
    } else {
      openBottomSheet();
    }
  };
  return (
    <section className='mt-[160px] desktop:mt-[120px] mb-[50px]'>
      <h1 className='text-[18px] desktop:text-[40px] font-semibold leading-[35px] desktop:leading-[60px]'>탄소계산</h1>

      <div className='flex flex-col gap-[10px] desktop:gap-[87px] mt-[11px] desktop:mt-[50px]'>
        <div className='flex flex-col items-center w-[333px] desktop:w-[1197px] h-[268px] desktop:h-[712px] bg-primary-100 rounded-[14px] desktop:rounded-[45px] desktop:rounded-[45px] pt-[22px] desktop:pt-[76px] shadow-custom'>
          <p className='text-[16px] desktop:text-[36px] desktop:h-[68px] font-medium text-[#4A4A68] leading-[35px] mb-[12px] desktop:mb-0'>
            내가 아낀 탄소를 확인해보세요!
          </p>
          <h1 className='text-[32px] desktop:text-[64px] desktop:h-[120px] desktop:flex desktop:items-center desktop:mb-[52px] font-bold text-primary-400'>
            {todoChallenge?.carbon_emissions}g CO₂
          </h1>
          <div className='relative flex w-[316px] h-[150px] desktop:w-[795px] desktop:h-[396px]'>
            <Image
              src={WinGiftsImage}
              alt='탄소 절감 축하 이미지'
              fill
              className='object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='desktop:text-[20px] desktop:mb-[23px] text-[10px] text-primary-400 font-medium leading-[35px]'>
            오늘의 챌린지를 완료했다면 버튼을 눌러주세요!
          </p>
          <Button
            onClick={onClickHandler}
            size='xlarge'
            variant='primary'
          >
            인증완료
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarbonEmissionResult;
