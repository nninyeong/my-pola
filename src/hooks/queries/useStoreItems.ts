import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchItems } from '@/services/itemstore/getItems';

export const useStoreItems = () => {
  return useQuery({
    queryKey: QUERY_KEYS.storItems(),
    queryFn: fetchItems,
  });
};
