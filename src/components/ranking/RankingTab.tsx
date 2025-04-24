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
      className={`text-[12px] desktop:text-[20px] leading-[12px] desktop:leading-[20px] font-medium ${isCurrentTab ? 'text-primary-400' : 'text-neutral-1000'}`}
    >
      {tabName}
    </button>
  );
}
