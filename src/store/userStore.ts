import { create } from 'zustand';

export type User = {
  user: null | {
    email: string;
  };
  setUser: (value: User['user']) => void;
};

export const useUserStore = create<User>(set => ({
  user: null,
  setUser: value => set({ user: value })
}));
