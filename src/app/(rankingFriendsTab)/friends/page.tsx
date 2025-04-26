'use client';

import InfoModal from '@/components/ui/modal/InfoModal';
import { ADD_FRIEND_RESPONSE_MAP } from '@/constants/addFriendResponse';
import { useEffect } from 'react';
import useInfoModalStore from '@/stores/useInfoModalStore';
import FriendsList from '@/components/ranking/FriendsList';

export default function Page({ searchParams }: { searchParams: { friendStatus?: string; friendName?: string } }) {
  const { friendStatus, friendName } = searchParams;
  const statusCode = friendStatus ? parseInt(friendStatus) : null;
  const { open } = useInfoModalStore();

  useEffect(() => {
    if (statusCode && statusCode in ADD_FRIEND_RESPONSE_MAP) {
      open();
    }
  }, [statusCode, open]);

  return (
    <div>
      {statusCode && statusCode in ADD_FRIEND_RESPONSE_MAP && (
        <InfoModal>
          <p className='text-[16px] text-neutral-900 font-semibold leading-[16px]'>
            <span>{friendName}</span>
            {ADD_FRIEND_RESPONSE_MAP[statusCode as keyof typeof ADD_FRIEND_RESPONSE_MAP].message}
          </p>
        </InfoModal>
      )}
      <FriendsList />
    </div>
  );
}
