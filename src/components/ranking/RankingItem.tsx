import { UserType } from '@/types/user.types';

type RankingItemProps = {
  rankUser: UserType;
  rank: number;
  currentUser: UserType;
};

export default function RankingItem({ rankUser, rank, currentUser }: RankingItemProps) {
  const { id, nickname, mileage } = rankUser;
  const isCurrentUser = currentUser.id === id;

  return (
    <div
      className={`${isCurrentUser ? 'bg-gradient-to-r from-[#5996E09E] from-62% to-white text-neutral-900' : 'bg-white text-neutral-1000/20'} flex flex-row justify-between items-center w-[339px] desktop:w-[810px] h-[42px] desktop:h-[92px] px-[12px] py-[14px] border-b-[1px] border-[#9EA2AD4D]/30 text-[14px] font-semibold`}
    >
      <span className={isCurrentUser ? 'text-primary-400' : ''}>{rank}</span>
      <span className='inline-block w-[244px]'>{nickname}</span>
      <span>{mileage}M</span>
    </div>
  );
}
