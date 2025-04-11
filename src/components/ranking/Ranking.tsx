'use client';

import { RankingTabType } from '@/types/ranking.types';
import { useRanking } from '@/hooks/queries/useRanking';
import RankingItem from './RankingItem';
import { useState } from 'react';
import { UserType } from '@/types/user.types';
import RankingTab from './RankingTab';

type RankingProps = {
  currentUser: UserType;
};

export default function Ranking({ currentUser }: RankingProps) {
  const [currentTab, setCurrentTab] = useState<RankingTabType>('total');

  const { data: ranking, isLoading, error } = useRanking();

  const toggleTab = () => {
    setCurrentTab((prev) => (prev === 'total' ? 'friend' : 'total'));
  };

  if (isLoading) return <div>랭킹 정보를 불러오는 중...</div>;
  if (error) return <div>랭킹 정보를 불러오는데 실패했습니다.</div>;
  if (!ranking) return <div>랭킹 정보가 없습니다.</div>;

  return (
    <div>
      <div className='flex flex-row w-full'>
        <RankingTab
          currentTab={currentTab}
          type='total'
          onClick={toggleTab}
        />
        <RankingTab
          currentTab={currentTab}
          type='friend'
          onClick={toggleTab}
        />
      </div>
      {ranking.map((user, rank) => (
        <RankingItem
          key={`user-ranking-${rank}`}
          rank={rank + 1}
          currentUser={currentUser}
          rankUser={user}
        />
      ))}
    </div>
  );
}
