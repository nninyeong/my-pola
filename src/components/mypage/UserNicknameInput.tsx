import Image from 'next/image';
import ErrorIcon from '/public/assets/icons/ErrorIcon.png';
import { RefObject } from 'react';

type UserNicknameInputProps = {
  nickname: string;
  setNickname: (nickname: string) => void;
  disabled: boolean;
  inputRef?: RefObject<HTMLInputElement>;
  error?: string;
  handleBlur?: () => void;
};
const UserNicknameInput = ({
  nickname,
  setNickname,
  disabled,
  inputRef,
  error,
  handleBlur,
}: UserNicknameInputProps) => {
  const handleChangeNickname = (nickname: string) => {
    setNickname(nickname);
  };

  return (
    <div className='flex flex-col gap-[7px] mb-[20px]'>
      <h3 className='font-semibold leading-[35px]'>닉네임</h3>
      <input
        className={`flex items-center w-full h-[46px] border border-neutral-300 rounded-[10px] pl-[16px] ${disabled ? 'text-neutral-400' : 'text-black'} bg-white focus:border-[#ff3232] focus:outline-none`}
        placeholder='마이폴라'
        value={nickname}
        maxLength={10}
        ref={inputRef}
        disabled={disabled}
        onChange={(e) => handleChangeNickname(e.target.value)}
        onBlur={handleBlur}
      />
      {error && (
        <div className='flex items-center gap-[1px]'>
          <div className='p-[1px]'>
            <Image
              src={ErrorIcon}
              height={13}
              width={13}
              alt='경고 아이콘'
            />
          </div>
          <p className='text-[10px] font-medium text-[#ff3232]'>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UserNicknameInput;
