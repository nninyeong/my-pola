import { updateEquippedItem } from '@/services/itemstore/updateItem';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queries/queryKeys';
import { Item } from '@/types/Item.types';

export const useUpdateEquippedItem = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (item: Item | null) => updateEquippedItem(item),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.equippedItemId(userId) }),
  });
};
