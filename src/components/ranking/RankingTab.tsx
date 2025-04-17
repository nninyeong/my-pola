import { RankingTabType } from '@/types/ranking.types';

type RankingTabProps = {
  currentTab: RankingTabType;
  type: RankingTabType;
  onClick: () => void;
};

export default function RankingTab({ currentTab, type, onClick }: RankingTabProps) {
  const isCurrentTab = currentTab === type;
  const tabName = type === 'total' ? '전체' : '친구';

  return (
    <button
      onClick={onClick}
      className={`text-[10px] leading-[10px] font-medium ${isCurrentTab ? 'text-neutral-1000' : 'text-neutral-1000/20'}`}
    >
      {tabName}
    </button>
  );
}
