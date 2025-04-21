'use client';
import useUserStore from '@/stores/useUserStore';
import { useEffect } from 'react';
import { getClientUser } from '@/utils/supabase/authClient';
import { getUserNickname } from '@/utils/supabase/user';

const UserInit = () => {
  const { setNickname } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getClientUser();
      if (!user) return;
      const nickname = await getUserNickname(user.id);
      setNickname(nickname);
    };

    fetchUser();
  }, []);

  return null;
};

export default UserInit;
