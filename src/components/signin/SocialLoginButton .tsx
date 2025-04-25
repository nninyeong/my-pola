import React from 'react';
type SocialLoginButtonProps = {
  onClick: () => void;
  color: string | null;
  children: React.ReactNode;
};

const SocialLoginButton = ({ onClick, color, children }: SocialLoginButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex justify-center items-center w-[333px] h-[50px] rounded-[5px] text-[17px] ${color ?? `bg-white border border-neutral-500`}`}
    >
      {children}
    </button>
  );
};
export default SocialLoginButton;
