import { RankingTabType } from '@/types/ranking.types';

type RankingTabProps = {
  currentTab: RankingTabType;
  type: RankingTabType;
  onClick: () => void;
};

export default function RankingTab({ currentTab, type, onClick }: RankingTabProps) {
  const isCurrentTab = currentTab === type;
  const tabName = type === 'total' ? '랭킹확인' : '추가한 친구';

  return (
    <button
      onClick={onClick}
      className={`text-[18px] font-semibold w-1/2 h-[52px] border-b-[2px] ${isCurrentTab ? 'text-neutral-1000 border-primary-400' : 'text-neutral-1000/20 border-neutral-200'}`}
    >
      {tabName}
    </button>
  );
}
