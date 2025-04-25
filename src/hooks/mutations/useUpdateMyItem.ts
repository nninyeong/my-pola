import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queries/queryKeys';
import { updateItem } from '@/services/itemstore/updateItem';

export const useUpdateMyItem = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.myItems(userId) });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.point(userId) });
    },
  });
};
