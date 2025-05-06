import { UserType } from '@/types/user.types';

type FriendItemProps = {
  friend: UserType;
  index: number;
};

export default function FriendItem({ friend, index }: FriendItemProps) {
  const { nickname, mileage } = friend;

  return (
    <div className='flex flex-row justify-between items-center w-full desktop:w-[316px] h-[42px] px-[12px] py-[14px] border-b-[1px] border-[#9EA2AD4D]/30 text-[14px] text-neutral-700 font-semibold'>
      <span>{index}</span>
      <span className='inline-block w-[244px]'>{nickname}</span>
      <span>{mileage}M</span>
    </div>
  );
}
