import StoreItemList from '@/components/itemstore/StoreItemList';

const StoreItems = () => {
  const point = 100;
  return (
    <section className='flex flex-col mt-[36px] gap-[28px]'>
      <div className='flex justify-between items-end font-semibold'>
        <h1 className='text-[20px]'>아이템 상점</h1>
        <h3 className='text-[14px]'>
          내 포인트 <span className='text-primary-400'>{point}P</span>
        </h3>
      </div>
      <StoreItemList />
    </section>
  );
};

export default StoreItems;
