import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { getUserEquippedItemId } from '@/utils/supabase/user';

export const useEquippedItemId = (userId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.equippedItemId(userId),
    queryFn: () => getUserEquippedItemId(userId),
    enabled: !!userId,
  });
};
