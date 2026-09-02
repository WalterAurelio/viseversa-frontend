import { create } from 'zustand';

type FilterStore = {
  talle?: string;
  ubicacion?: string;
  categoria?: string;
  setTalle: (talle: FilterStore['talle']) => void;
  setUbicacion: (ubicacion: FilterStore['ubicacion']) => void;
  setCategoria: (categoria: FilterStore['categoria']) => void;
};

export const useFilterProductsStore = create<FilterStore>((set) => ({
  talle: undefined,
  ubicacion: undefined,
  categoria: undefined,
  setTalle: (talle) => set({ talle }),
  setUbicacion: (ubicacion) => set({ ubicacion }),
  setCategoria: (categoria) => set({ categoria })
}));
