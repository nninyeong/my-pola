'use client';
import { updateNickname } from '@/services/mypage/updateNickname';
import { validateNickname } from '@/utils/validateNickname';
import { RefObject, useState } from 'react';

export const useNicknameValidation = (nickname: string, inputRef: RefObject<HTMLInputElement>) => {
  const [error, setError] = useState('');

  const handleBlur = async () => {
    const errorMessage = await validateNickname(nickname);
    setError(errorMessage);
    inputRef?.current?.focus();
    return;
  };

  const handleSubmit = async () => {
    const errorMessage = await validateNickname(nickname);

    if (errorMessage) {
      setError(errorMessage);
      inputRef?.current?.focus();
      return;
    }

    await updateNickname(nickname);
  };

  return { error, handleBlur, handleSubmit };
};
