'use client';
import ConfirmItemPurchase from '@/components/itemstore/ConfirmItemPurchase';
import MyItems from '@/components/itemstore/MyItems';
import StoreItems from '@/components/itemstore/StoreItems';
import BottomSheet from '@/components/ui/bottomsheet/BottomSheet';
import ActionModal from '@/components/ui/modal/ActionModal';
import { useUpdateMyItem } from '@/hooks/mutations/useUpdateMyItem';
import { useClientUser } from '@/hooks/queries/useClientUser';
import { useEquippedItemId } from '@/hooks/queries/useEquippedItem';
import { useMyItems } from '@/hooks/queries/useMyItems';
import { usePoint } from '@/hooks/queries/usePoint';
import { isItemOwned } from '@/services/itemstore/isItemOwned';
import { isPointSufficient } from '@/services/itemstore/isPointSufficient';
import useActionModalStore from '@/stores/useActionModalStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import { Item } from '@/types/Item.types';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const ItemStorePage = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const isDesktop = useMediaQuery({ minWidth: '1440px' });
  const { open: openBottomSheet, close: closeBottomSheet } = useBottomSheetStore();
  const { open: openActionModal, close: closeActionModal } = useActionModalStore();
  const { data: user } = useClientUser();
  const userId = user?.id;
  const { data: point = 0 } = usePoint(userId!);
  const { data: myItems = [] } = useMyItems(userId!);
  const { data: equippedItemId = null } = useEquippedItemId(userId!);
  const { mutate: updateMyItem } = useUpdateMyItem(userId!);

  const onItemSelect = (item: Item) => {
    setSelectedItem(item);
    if (isDesktop) {
      openActionModal();
    } else {
      openBottomSheet();
    }
  };

  const onItemConfirm = (item: Item) => {
    updateMyItem(item);
    if (isDesktop) {
      closeActionModal();
    } else {
      closeBottomSheet();
    }
  };
  return (
    <>
      <StoreItems
        point={point}
        onItemSelect={onItemSelect}
      />
      <MyItems
        userId={userId!}
        myItems={myItems}
        equippedItemId={equippedItemId}
      />
      {isDesktop ? (
        <ActionModal
          onClick={() => onItemConfirm(selectedItem!)}
          type='confirm'
          label='아이템 구매하기'
          disabled={!selectedItem || !isPointSufficient(selectedItem, point) || isItemOwned(selectedItem, myItems)}
        >
          {selectedItem && <ConfirmItemPurchase selectedItem={selectedItem} />}
        </ActionModal>
      ) : (
        <BottomSheet
          onClick={() => onItemConfirm(selectedItem!)}
          type='confirm'
          label='아이템 구매하기'
          disabled={!selectedItem || !isPointSufficient(selectedItem, point) || isItemOwned(selectedItem, myItems)}
        >
          {selectedItem && <ConfirmItemPurchase selectedItem={selectedItem} />}
        </BottomSheet>
      )}
    </>
  );
};

export default ItemStorePage;
