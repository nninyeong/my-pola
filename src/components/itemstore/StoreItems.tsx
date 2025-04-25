import StoreItemList from '@/components/itemstore/StoreItemList';
import { Item } from '@/types/Item.types';

type StoreItemsProps = {
  point: number;
  userId: string;
  myItems: Item[];
};

const StoreItems = ({ point, userId, myItems }: StoreItemsProps) => {
  return (
    <section className='flex flex-col mt-[36px] gap-[28px]'>
      <div>
        <div className='flex justify-between items-end font-semibold desktop:h-[67px] desktop:items-start'>
          <h1 className='text-[20px] desktop:text-[40px] desktop:leading-[50px]'>아이템 상점</h1>
          <h3 className='text-[14px] desktop:text-[20px]'>
            내 포인트 <span className='text-primary-400'>{point}P</span>
          </h3>
        </div>
        <p className='text-[10px] desktop:text-[20px] font-medium text-primary-400'>마이폴라 아이템을 구매해보세요!</p>
      </div>

      <StoreItemList
        point={point}
        userId={userId}
        myItems={myItems}
      />
    </section>
  );
};

export default StoreItems;
