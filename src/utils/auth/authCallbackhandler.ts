import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { handleKakaoSignIn } from '../supabase/singIn';

export const handleAuthCallback = async (router: AppRouterInstance) => {
  const searchParams = new URLSearchParams(window.location.search);
  const social = searchParams.get('social');

  if (social === 'kakao') {
    handleKakaoSignIn();
  }
  router.replace('/');
};
