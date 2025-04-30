'use client';
import useUserStore from '@/stores/useUserStore';
import { createClient } from '@/utils/supabase/client';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useSignOut = () => {
  const queryclient = useQueryClient();
  const client = createClient();
  const router = useRouter();
  const clearUser = useUserStore((state) => state.clearUser);

  const handleSignOut = async () => {
    const { error } = await client.auth.signOut();
    if (error) return console.error('Signout failed: ', error);

    clearUser();

    const EXCLUDE_KEYS = ['storeItems'];
    const allQueries = queryclient.getQueryCache().findAll();

    allQueries.forEach((query) => {
      const { queryKey } = query;
      const rootKey = queryKey[0] as string;

      if (!EXCLUDE_KEYS.includes(rootKey)) {
        queryclient.invalidateQueries({ queryKey });
      }
    });

    router.refresh();
    router.push('/');
  };
  return { handleSignOut };
};
