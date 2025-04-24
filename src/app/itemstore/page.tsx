'use client';
import MyItems from '@/components/itemstore/MyItems';
import StoreItems from '@/components/itemstore/StoreItems';
import { useClientUser } from '@/hooks/queries/useClientUser';
import { useEquippedItemId } from '@/hooks/queries/useEquippedItem';
import { useMyItems } from '@/hooks/queries/useMyItems';
import { usePoint } from '@/hooks/queries/usePoint';

const ItemStorePage = () => {
  const { data: user } = useClientUser();
  const userId = user?.id;

  const { data: point = 0 } = usePoint(userId!);
  const { data: myItems = [] } = useMyItems(userId!);
  const { data: equippedItemId = null } = useEquippedItemId(userId!);

  return (
    <>
      <StoreItems
        point={point}
        userId={userId!}
        myItems={myItems}
      />
      <MyItems
        userId={userId!}
        myItems={myItems}
        equippedItemId={equippedItemId}
      />
    </>
  );
};

export default ItemStorePage;
