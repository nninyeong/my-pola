import { UserType } from '@/types/user.types';

type RankingItemProps = {
  rankUser: UserType;
  rank: number;
  currentUser: UserType;
};

export default function RankingItem({ rankUser, rank, currentUser }: RankingItemProps) {
  const { id, nickname, mileage, level } = rankUser;
  const isCurrentUser = currentUser.id === id;

  return (
    <div
      className={`${isCurrentUser ? 'bg-gradient-to-r from-[#5996E09E] from-62% to-white desktop:to-white/40 text-neutral-900' : 'bg-white desktop:bg-transparent text-neutral-1000/20 desktop:text-neutral-500'} flex flex-row justify-between items-center w-full desktop:w-[810px] h-[42px] desktop:h-[92px] px-[12px] desktop:px-[60px] py-[14px] desktop:py-[33px] border-b-[1px] border-[#9EA2AD4D]/30 text-[14px] desktop:text-[20px] font-semibold`}
    >
      <span className={isCurrentUser ? 'text-primary-400' : ''}>{rank}</span>
      <div className='flex flex-row gap-[8px] justify-start items-center desktop:w-[520px]'>
        <span className='block w-[244px] desktop:w-fit'>{nickname}</span>
        <span className='hidden desktop:block'>LV.{level}</span>
      </div>
      <span>{mileage}M</span>
    </div>
  );
}
