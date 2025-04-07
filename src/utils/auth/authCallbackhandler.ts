import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleAuthCallback = async (router: AppRouterInstance) => {
  const searchParams = new URLSearchParams(window.location.search);
  const error = searchParams.get('error');
  const provider = searchParams.get('provider');

  if (error === 'social_conflict' && provider === 'kakao') {
    alert('이미 다른 소셜 계정(카카오)으로 가입된 이메일입니다!');
    router.replace('/signin');
  }
};
