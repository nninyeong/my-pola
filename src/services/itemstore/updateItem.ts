import { Item } from '@/types/Item.types';
import { getClientUser } from '@/utils/supabase/authClient';
import { createClient } from '@/utils/supabase/client';
import { getUserItems, getUserPoint } from '@/utils/supabase/user';

export const updateItem = async (item: Item) => {
  const client = createClient();

  const user = await getClientUser();
  if (!user) return null;

  const [userItems, userPoint] = await Promise.all([getUserItems(user.id), getUserPoint(user.id)]);

  const updatedItems = [...userItems, item];
  const updatedPoint = userPoint - item.price;

  const { error } = await client.from('users').update({ items: updatedItems, point: updatedPoint }).eq('id', user.id);

  if (error) {
    console.error('아이템 데이터를 업데이트하는데 실패했습니다.', error);
  }
};

export const updateEquippedItem = async (item: Item | null) => {
  const client = createClient();

  const user = await getClientUser();
  if (!user) return null;

  const { error } = await client
    .from('users')
    .update({ equipped_item_id: item ? item.id : null })
    .eq('id', user.id);

  if (error) {
    console.error('장착할 아이템 데이터를 업데이트하는데 실패했습니다.', error);
  }
};
