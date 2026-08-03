import { create } from 'zustand';
import type { User } from 'firebase/auth';

type AuthStore = {
  user: User | null;
  setUser: (user: AuthStore['user']) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthStore>(set => ({
  user: null,
  setUser: user => set({ user }),
  loading: true,
  setLoading: loading => set({ loading })
}));
