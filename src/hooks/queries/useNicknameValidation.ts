'use client';
import { updateNickname } from '@/services/mypage/updateNickname';
import { validateNickname } from '@/utils/validateNickname';
import { useRouter } from 'next/navigation';
import { RefObject, useState } from 'react';

export const useNicknameValidation = (nickname: string, inputRef: RefObject<HTMLInputElement>) => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleBlur = async () => {
    const errorMessage = await validateNickname(nickname);
    setError(errorMessage);

    if (errorMessage) {
      inputRef?.current?.focus();
    }
  };

  const handleSubmit = async () => {
    const errorMessage = await validateNickname(nickname);

    if (errorMessage) {
      setError(errorMessage);
      inputRef?.current?.focus();
      return;
    }

    const isUpdateSuccessful = await updateNickname(nickname);
    if (isUpdateSuccessful) {
      setError('');
      router.replace('/mypage');
    }
  };

  return { error, handleBlur, handleSubmit };
};
