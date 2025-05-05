import Image from 'next/image';
import UnequippedMyPolarImage from '/public/assets/images/unequippedMyPolarImage.webp';

type UnequipItemCard = {
  onClick: () => void;
};
const UnequipItemCard = ({ onClick }: UnequipItemCard) => {
  return (
    <div
      onClick={onClick}
      className='cursor-pointer desktop:min-w-[376px] desktop:h-[416px] rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] min-w-[140px] h-[157px] shadow-primaryCustom'
    >
      <div className='desktop:pb-[55px] desktop:pt-[59px] bg-white rounded-[23px] h-full w-full pb-[10px] pt-[22px] flex flex-col items-center justify-around font-semibold text-neutral-900 '>
        <div className='relative h-[87px] w-[100%] desktop:mb-[17px] desktop:h-[322px]'>
          <Image
            src={UnequippedMyPolarImage}
            alt='아이템 벗은 마이폴라 이미지'
            fill
            className='object-contain'
          />
        </div>
        <h1 className='text-[12px] desktop:text-[20px] desktop:leading-[35px]'>아이템 벗기</h1>
      </div>
    </div>
  );
};

export default UnequipItemCard;
