import React from 'react';
type SocialLoginButtonProps = {
  onClick: () => void;
  color: string | null;
  label: string;
};

const SocialLoginButton = ({ onClick, color, label }: SocialLoginButtonProps) => {
  // TODO: 사진 추가할 것
  return (
    <button
      onClick={onClick}
      className={`w-[333px] h-[50px] rounded-[5px] ${color ?? `border`}`}
    >
      {label}
    </button>
  );
};
export default SocialLoginButton;
