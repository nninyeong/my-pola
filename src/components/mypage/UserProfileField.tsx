'use client';

import { RefObject, useEffect, useState } from 'react';
import { getClientUser } from '@/utils/supabase/authClient';
import { getUserNickname } from '@/utils/supabase/user';
import useUserStore from '@/stores/useUserStore';
import UserNicknameInput from './UserNicknameInput';
import UserEmailField from './UserEmailField';

type UserProfileFieldProps = {
  disabled: boolean;
  inputRef?: RefObject<HTMLInputElement>;
  error?: string;
  handleBlur?: () => void;
};

const UserProfileField = ({ disabled, inputRef, error, handleBlur }: UserProfileFieldProps) => {
  const { nickname, setNickname } = useUserStore();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getClientUser();
      if (!user) return;

      const nickname = await getUserNickname(user.id);
      setNickname(nickname);
      setEmail(user.email!);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <UserNicknameInput
        nickname={nickname}
        setNickname={setNickname}
        disabled={disabled}
        inputRef={inputRef}
        error={error}
        handleBlur={handleBlur}
      />
      <UserEmailField email={email} />
    </>
  );
};

export default UserProfileField;
