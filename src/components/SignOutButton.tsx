'use client';
import { useSignOut } from '@/hooks/auth/useSignOut';
import Button from './ui/buttons/Button';

const SignOutButton = () => {
  const { handleSignOut } = useSignOut();

  return (
    <>
      <p
        onClick={handleSignOut}
        className='cursor-pointer fixed bottom-[17px] right-[17px] justify-end items-end text-[10px] font-medium text-primary-400 leading-[35px] desktop:hidden'
      >
        로그아웃
      </p>
      <div className='hidden desktop:flex'>
        <Button
          size='medium'
          variant='primary'
          onClick={handleSignOut}
        >
          로그아웃
        </Button>
      </div>
    </>
  );
};

export default SignOutButton;
