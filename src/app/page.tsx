'use client';
import { handleAuthCallback } from '@/utils/auth/authCallbackhandler';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    handleAuthCallback(router);
  }, []);

  return <div>홈</div>;
}
