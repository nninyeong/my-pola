'use client';
import UserProfileField from '@/components/mypage/UserProfileField';
import Button from '@/components/ui/buttons/Button';
import { useNicknameValidation } from '@/hooks/queries/useNicknameValidation';
import useUserStore from '@/stores/useUserStore';
import Image from 'next/image';
import { useRef } from 'react';
import PrevIcon from '/public/assets/icons/PrevIcon.png';
import { useRouter } from 'next/navigation';

const EditNicknamePage = () => {
  const { nickname } = useUserStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const { error, handleBlur, handleSubmit } = useNicknameValidation(nickname, inputRef);
  const router = useRouter();
  return (
    <>
      <Image
        src={PrevIcon}
        width={10}
        height={19}
        alt='이전 버튼'
        onClick={() => router.back()}
        className='fixed top-[55px] desktop:hidden'
      />
      <div className='w-[335px] mx-auto'>
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
    </>
  );
};

export default EditNicknamePage;
