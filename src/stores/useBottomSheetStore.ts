import { create } from 'zustand';

type BottomSheetState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((prev) => ({ isOpen: !prev.isOpen })),
}));

export default useBottomSheetStore;
