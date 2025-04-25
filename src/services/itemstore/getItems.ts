import { Item } from '@/types/Item.types';
import { createClient } from '@/utils/supabase/client';

export const fetchItems = async (): Promise<Item[] | null> => {
  const client = createClient();

  const { data, error } = await client.from('items').select('*');

  if (error) {
    console.error('아이템 데이터를 불러오는데 실패했습니다.', error);
    return null;
  }
  return data;
};
