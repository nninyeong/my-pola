import { Item } from '@/types/Item.types';
import Image from 'next/image';
import UnselectedIcon from '/public/assets/icons/UnselectedIcon.webp';
import SelectedIcon from '/public/assets/icons/SelectedIcon.webp';

type MyItemCardProps = Item & {
  isEquippedItem: boolean;
};

const MyItemCard = ({ title, icon_url, isEquippedItem }: MyItemCardProps) => {
  return (
    <div className='desktop:min-w-[376px] desktop:h-[416px] rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] min-w-[140px] h-[157px] shadow-primaryCustom'>
      <div className='desktop:pb-[55px] desktop:pt-[59px] relative bg-white rounded-[23px] h-full w-full pb-[10px] pt-[22px] flex flex-col items-center justify-around font-semibold text-neutral-900'>
        <div className='relative h-[87px] desktop:h-[322px] w-[100%] desktop:mb-[17px]'>
          <Image
            src={icon_url}
            alt={`${title} 아이콘`}
            fill
            className='object-cover'
          />
        </div>
        <h1 className='text-[12px] desktop:text-[20px] desktop:leading-[35px]'>{title}</h1>
        <div className='h-[20px] w-[20px] desktop:h-[35px] desktop:w-[35px] desktop:top-[30px] desktop:right-[30px] desktop:text-[15px] absolute top-[10px] right-[10px]'>
          <Image
            src={isEquippedItem ? SelectedIcon : UnselectedIcon}
            alt={isEquippedItem ? '장착됨' : '장착되지 않음'}
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default MyItemCard;
