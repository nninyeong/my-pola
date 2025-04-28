import Image from 'next/image';
import { LEVEL } from '@/constants/levelInfo';

type MypolaProps = {
  level: typeof LEVEL;
};

const MYPOLA_IMAGE_MAP: Record<typeof LEVEL, string> = {
  1: '/assets/images/mypola/mypola1.png',
  2: '/assets/images/mypola/mypola2.png',
  3: '/assets/images/mypola/mypola3.png',
} as const;

export default function Mypola({ level }: MypolaProps) {
  return (
    <Image
      src={MYPOLA_IMAGE_MAP[level]}
      alt='마이폴라'
      fill={true}
      className='z-[5] relative object-contain object-bottom'
    />
  );
}
