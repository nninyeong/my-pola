import React from 'react';
type SocialLoginButtonProps = {
  onClick: () => void;
  color: string | null;
  children: React.ReactNode;
};

const SocialLoginButton = ({ onClick, color, children }: SocialLoginButtonProps) => {
  // TODO: 사진 추가할 것
  return (
    <button
      onClick={onClick}
      className={`relative flex justify-center items-center w-[333px] h-[50px] rounded-[5px] text-[17px] ${color ?? `border border-neutral-500`}`}
    >
      {children}
    </button>
  );
};
export default SocialLoginButton;
