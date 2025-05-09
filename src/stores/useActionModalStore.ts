import { create } from 'zustand';

type ActionModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const useActionModalStore = create<ActionModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((prev) => ({ isOpen: !prev.isOpen })),
}));

export default useActionModalStore;
