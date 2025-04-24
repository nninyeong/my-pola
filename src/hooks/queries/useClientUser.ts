import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { getClientUser } from '@/utils/supabase/authClient';

export const useClientUser = () => {
  return useQuery({
    queryKey: QUERY_KEYS.clientUser(),
    queryFn: getClientUser,
  });
};
