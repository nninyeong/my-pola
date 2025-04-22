import { checkNicknameDuplicate } from '@/services/mypage/checkNicknameDuplicate';

export const validateNickname = async (value: string) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return '입력칸이 비었습니다.';
  }

  if (/^[ㄱ-ㅎㅏ-ㅣ]+$/.test(trimmed)) {
    return '완성된 한글(예: 가, 나 등)로 입력해야 합니다.';
  }

  if (!/^[\uAC00-\uD743a-zA-Z0-9\s]{1,10}$/.test(trimmed)) {
    return '닉네임은 특수문자를 제외한 10자 이내여야 합니다.';
  }

  const isDuplicate = await checkNicknameDuplicate(trimmed);
  if (isDuplicate) {
    return '이미 사용 중인 닉네임입니다.';
  }

  return '';
};
