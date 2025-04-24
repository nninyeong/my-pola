import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { getUserItems } from '@/utils/supabase/user';

export const useMyItems = (userId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.myItems(userId),
    queryFn: () => getUserItems(userId),
    enabled: !!userId,
  });
};
