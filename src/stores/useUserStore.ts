import { create } from 'zustand';

type UserState = {
  nickname: string;
  setNickname: (nickname: string) => void;
  clearUser: () => void;
};

const useUserStore = create<UserState>((set) => ({
  nickname: '',
  setNickname: (nickname) => set({ nickname }),
  clearUser: () => set({ nickname: '' }),
}));

export default useUserStore;
