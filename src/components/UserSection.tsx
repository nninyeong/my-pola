import { useRouter } from 'next/navigation';
import Button from './ui/buttons/Button';
import Image from 'next/image';
import SignOutButton from './SignOutButton';
import MypageIcon from '/public/assets/icons/MypageIcon.png';

type UserSectionProps = {
  isSignedIn: boolean;
};

const UserSection = ({ isSignedIn }: UserSectionProps) => {
  const router = useRouter();

  if (!isSignedIn) {
    return (
      <div className='hidden desktop:flex items-center ml-[74px]'>
        <Button
          size='small'
          variant='primary'
          onClick={() => router.push('/signin')}
        >
          로그인
        </Button>
      </div>
    );
  }
  return (
    <div className='flex items-center ml-[74px] gap-[15px]'>
      <div className='hidden desktop:flex'>
        <Image
          src={MypageIcon}
          width={42}
          height={42}
          alt='마이페이지 아이콘'
          onClick={() => router.push('/mypage')}
        />
      </div>
      <SignOutButton />
    </div>
  );
};

export default UserSection;
