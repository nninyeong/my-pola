'use client';

import { useState, useEffect } from 'react';
import { UserType } from '@/types/user.types';
import { getUserFriendsData } from '@/utils/supabase/user';
import FriendItem from './FriendItem';

export default function FriendsList() {
  const [friends, setFriends] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendsData = await getUserFriendsData();
        setFriends(friendsData);
      } catch (error) {
        console.error('친구 목록을 불러오는데 실패했습니다:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFriends();
  }, []);

  if (isLoading) {
    return <div className='text-center py-4'>친구 정보를 불러오고 있습니다...</div>;
  }

  if (friends.length === 0) {
    return <div className='text-center py-4'>추가된 친구가 없습니다.</div>;
  }

  return (
    <div className='flex flex-col'>
      {friends.map((friend, index) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          index={index + 1}
        />
      ))}
    </div>
  );
}
