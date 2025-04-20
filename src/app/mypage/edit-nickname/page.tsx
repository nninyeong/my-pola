'use client';
import UserProfileField from '@/components/mypage/UserProfileField';
import Button from '@/components/ui/buttons/Button';
import { useNicknameValidation } from '@/hooks/queries/useNicknameValidation';
import useUserStore from '@/stores/useUserStore';
import { useRef } from 'react';

const EditNicknamePage = () => {
  const { nickname } = useUserStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const { error, handleBlur, handleSubmit } = useNicknameValidation(nickname, inputRef);

  return (
    <div className='mt-[39px]'>
      <UserProfileField
        disabled={false}
        inputRef={inputRef}
        error={error}
        handleBlur={handleBlur}
      />
      <Button
        size='xlarge'
        variant='primary'
        onClick={handleSubmit}
      >
        저장
      </Button>
    </div>
  );
};

export default EditNicknamePage;
