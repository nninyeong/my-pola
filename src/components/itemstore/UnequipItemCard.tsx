type UnequipItemCard = {
  onClick: () => void;
};
const UnequipItemCard = ({ onClick }: UnequipItemCard) => {
  return (
    <div
      onClick={onClick}
      className='rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] min-w-[140px] h-[157px] shadow-primaryCustom'
    >
      <div className='bg-white rounded-[23px] h-full w-full pb-[10px] pt-[22px] flex flex-col items-center justify-around font-semibold text-neutral-900 '>
        <div className='h-[75px] w-[73px] rounded-full bg-[#d9d9d9]' />
        <h1 className='text-[16px]'>아이템 벗기</h1>
      </div>
    </div>
  );
};

export default UnequipItemCard;
