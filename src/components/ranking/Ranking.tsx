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
  const { data: ranking, isLoading, isError, error } = useRanking(currentUser);

  const toggleTab = () => {
    setCurrentTab((prev) => (prev === 'total' ? 'friend' : 'total'));
  };

  const renderRankingList = () => {
    if (isLoading) return <div>랭킹 정보를 불러오는 중...</div>;
    if (isError) return <div>{error.message}</div>;

    if (currentTab === 'friend') {
      const hasNoFriend = !ranking?.rankInFriends || ranking.rankInFriends.length === 0;
      if (hasNoFriend) return <div>추가된 친구가 없습니다.</div>;

      return ranking?.rankInFriends.map((user, index) => (
        <RankingItem
          key={`user-ranking-${index}`}
          rank={user.rank}
          currentUser={currentUser}
          rankUser={user}
        />
      ));
    }

    return ranking?.rankInTotal.map((user, index) => (
      <RankingItem
        key={`user-ranking-${index}`}
        rank={user.rank}
        currentUser={currentUser}
        rankUser={user}
      />
    ));
  };

  return (
    <div className='flex flex-col items-center'>
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
      {renderRankingList()}
    </div>
  );
}
