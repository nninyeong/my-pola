'use client';

import Modal from '@/components/ui/modal/Modal';
import { ADD_FRIEND_RESPONSE_MAP } from '@/constants/addFriendResponse';
import { useEffect } from 'react';
import useModalStore from '@/stores/useModalStore';
import FriendsList from '@/components/ranking/FriendsList';

export default function Page({ searchParams }: { searchParams: { friendStatus?: string; friendName?: string } }) {
  const { friendStatus, friendName } = searchParams;
  const statusCode = friendStatus ? parseInt(friendStatus) : null;
  const { open } = useModalStore();

  useEffect(() => {
    if (statusCode && statusCode in ADD_FRIEND_RESPONSE_MAP) {
      open();
    }
  }, [statusCode, open]);

  return (
    <div>
      {statusCode && statusCode in ADD_FRIEND_RESPONSE_MAP && (
        <Modal>
          <p>
            <span>{friendName}</span>
            {ADD_FRIEND_RESPONSE_MAP[statusCode as keyof typeof ADD_FRIEND_RESPONSE_MAP].message}
          </p>
        </Modal>
      )}
      <FriendsList />
    </div>
  );
}
