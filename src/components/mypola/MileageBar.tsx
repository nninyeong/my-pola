import { MAX_MILEAGE } from '@/constants/levelInfo';

type MileageBarProps = {
  mileage: number;
  level: number;
};

export default function MileageBar({ mileage, level }: MileageBarProps) {
  const maxMileage = MAX_MILEAGE[`level${level}` as keyof typeof MAX_MILEAGE];
  const barWidth = (mileage / maxMileage) * 100;

  return (
    <div className='w-fit mx-auto'>
      <div className='w-[282px] h-[8px] rounded-full bg-neutral-300'>
        <div
          className='h-[8px] rounded-full bg-primary-300'
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
      <p className='font-semibold text-neutral-900 text-[14px] text-end'>
        {mileage}/{maxMileage}
      </p>
    </div>
  );
}
