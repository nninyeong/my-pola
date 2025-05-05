import Image from 'next/image';
import { LEVEL } from '@/constants/levelInfo';

type MypolaProps = {
  level: typeof LEVEL;
  equippedItem: number;
};

const MYPOLA_IMAGE_MAP: Record<typeof LEVEL, string> = {
  1: '/assets/images/mypola/mypola1.png',
  2: '/assets/images/mypola/mypola2.png',
  3: '/assets/images/mypola/mypola3.png',
} as const;

export default function Mypola({ level, equippedItem }: MypolaProps) {
  const imageSrc = equippedItem
    ? `/assets/images/mypola/level${level}/item${equippedItem}.png`
    : MYPOLA_IMAGE_MAP[level];

  return (
    <Image
      src={imageSrc}
      alt='마이폴라'
      fill={true}
      className='z-[5] relative object-contain object-bottom'
    />
  );
}
