import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { getUserPoint } from '@/utils/supabase/user';

export const usePoint = (userId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.point(userId),
    queryFn: () => getUserPoint(userId),
    enabled: !!userId,
  });
};
