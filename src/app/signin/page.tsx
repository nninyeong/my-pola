'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { handleAuthCallback } from '@/utils/auth/authCallbackhandler';
import SignInHeader from '@/components/signin/SignInHeader';
import SocialLoginSection from '@/components/signin/SocialLoginSection';

const SigInPage = () => {
  const router = useRouter();

  useEffect(() => {
    handleAuthCallback(router);
  }, []);

  return (
    <>
      <SignInHeader />
      <SocialLoginSection />
    </>
  );
};

export default SigInPage;
