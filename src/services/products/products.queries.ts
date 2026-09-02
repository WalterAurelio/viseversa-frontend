import { useSuspenseQuery } from '@tanstack/react-query';
import { useAuthStore } from '../../store/authStore';
import { useFilterProductsStore } from '../../store/filterProductsStore';
import { filterProducts, getProducts } from './products.api';

export function useGetProducts() {
  const user = useAuthStore((state) => state.user);

  return useSuspenseQuery({
    queryKey: ['homeProducts', { uid: user?.uid }],
    queryFn: getProducts
  });
}

export function useFilterProducts(categoria: string, params: string) {
  // const { ubicacion, talle } = useFilterProductsStore((state) => state);
  // const talle = searchParams.get('talle')
  // const { categoria } = useParams()
  // const params = new URLSearchParams();

  // if (talle) {
  //   params.set('talle', talle);
  // }
  // if (ubicacion) {
  //   params.set('ubicacion', ubicacion);
  // }

  return useSuspenseQuery({
    queryKey: ['filteredProducts', categoria, params],
    queryFn: () => filterProducts(categoria || '', params)
  });
}
