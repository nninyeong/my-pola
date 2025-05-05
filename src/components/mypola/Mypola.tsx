import Image from 'next/image';
import { LEVEL } from '@/constants/levelInfo';
import { useEquippedItemId } from '@/hooks/queries/useEquippedItem';

type MypolaProps = {
  id: string;
  level: typeof LEVEL;
};

const MYPOLA_IMAGE_MAP: Record<typeof LEVEL, string> = {
  1: '/assets/images/mypola/mypola1.png',
  2: '/assets/images/mypola/mypola2.png',
  3: '/assets/images/mypola/mypola3.png',
} as const;

export default function Mypola({ id, level }: MypolaProps) {
  const { data: equippedItemId } = useEquippedItemId(id);

  const imageSrc = equippedItemId
    ? `/assets/images/mypola/level${level}/item${equippedItemId}.png`
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
