'use client';

import Ranking from '@/components/ranking/Ranking';
import { RankingTap } from '@/types/ranking.types';
import { useState } from 'react';

export default function page() {
  const [currentTap, setCurrentTap] = useState<RankingTap>('total');

  const toggleTap = () => {
    setCurrentTap((prev) => (prev === 'total' ? 'friend' : 'total'));
  };

  return (
    <div>
      <Ranking currentTap={currentTap} />
    </div>
  );
}
