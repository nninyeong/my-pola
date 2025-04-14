import Image from 'next/image';
import WinGiftsImage from '/public/assets/images/WinGifts.png';
import { Challenge } from '@/types/challenge.types';
import Button from '@/components/ui/buttons/Button';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

type CarbonEmissionResultProps = {
  todoChallenge: Challenge | null;
};
const CarbonEmissionResult = ({ todoChallenge }: CarbonEmissionResultProps) => {
  const { open } = useBottomSheetStore();

  return (
    <section className='mt-[160px] mb-[10px]'>
      <h1 className='text-[18px] font-semibold leading-[35px]'>탄소계산</h1>

      <div className='flex flex-col gap-[39px] mt-[11px]'>
        <div className='flex flex-col items-center w-[333px] h-[268px] bg-primary-100 rounded-[14px] pt-[22px] shadow-custom'>
          <p className='text-[16px] font-medium text-[#4A4A68] leading-[35px] mb-[12px]'>
            내가 아낀 탄소를 확인해보세요!
          </p>
          <h1 className='text-[32px] font-bold text-primary-400'>{todoChallenge?.carbon_emissions}</h1>
          <Image
            src={WinGiftsImage}
            width={316}
            height={150}
            alt='탄소 절감 축하 이미지'
          />
        </div>
        <Button
          onClick={open}
          size='xlarge'
          variant='primary'
        >
          인증완료
        </Button>
      </div>
    </section>
  );
};

export default CarbonEmissionResult;
