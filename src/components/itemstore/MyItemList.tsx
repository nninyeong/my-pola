import ItemCard from './ItemCard';

const MyItemList = () => {
  const Items = true;
  const MOCK_ITEM = {
    title: '오로라망토',
    description: '눈을 뗄 수 없는 핫 아이템',
    icon_url: '',
    image_url: '',
    price: 200,
  };

  return (
    <div>
      {Items ? (
        <div className='flex gap-[13px] overflow-x-auto whitespace-nowrap min-h-[165px] -mr-[20px] first:pl-[2px] last:pr-[20px]'>
          <ItemCard
            {...MOCK_ITEM}
            showPrice={false}
          />
          <ItemCard
            {...MOCK_ITEM}
            showPrice={false}
          />
          <ItemCard
            {...MOCK_ITEM}
            showPrice={false}
          />
        </div>
      ) : (
        <div className='rounded-[23px] p-[1px] bg-gradient-to-b from-[#5996e0] to-[#30527A] w-[339px] h-[157px] shadow-custom'>
          <div className='bg-white rounded-[23px] h-full w-full font-semibold text-neutral-900'>
            <p className='flex flex-col items-center justify-center text-[16px] h-full w-full bg-[#CADEF5]/[22%]'>
              아직 등록된 아이템이 없습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyItemList;
