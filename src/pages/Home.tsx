import { signOut } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { useGetProducts } from '../services/products/products.queries';
import type { ProductHomeResponse } from '../services/products/products.types';
import { useFilterProductsStore } from '../store/filterProductsStore'
import { CATEGORIAS } from '../types/Category';

function Home() {
  const user = useAuthStore(state => state.user);
  const queryClient = useQueryClient();
  const { data: products } = useGetProducts();
  
  const productList: ProductHomeResponse[] = products
    ? Array.isArray(products)
      ? products
      : [products]
    : [];
  const categories = productList.map((prod: ProductHomeResponse) => prod.categoria);
  const uniqueCategories = Array.from(
    new Set(
      categories.filter((category): category is keyof typeof CATEGORIAS => category in CATEGORIAS)
    )
  );
  const { setCategoria } = useFilterProductsStore(state => state)

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      queryClient.removeQueries({ queryKey: ['userProfile'] });
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className='p-8 border border-gray-300 rounded-md flex flex-col items-center gap-2 w-3xl mx-auto mt-8'>
      <h1 className='text-2xl font-bold'>Bienvenido a ViseVersa</h1>
      <p className='text-lg text-gray-500 font-bold'>Usuario: {user?.email}</p>
      <Link to='/profile'>Ir a Perfil</Link>
      <button
        className='bg-red-500 text-white p-2 rounded-md hover:bg-red-600 w-full'
        onClick={handleLogOut}
      >
        Cerrar sesión
      </button>
      <div className='flex gap-4'>
        {uniqueCategories.map((cat: keyof typeof CATEGORIAS, idx: number) => (
        <Link to={cat} key={idx} onClick={() => setCategoria(CATEGORIAS[cat])}>
          <>{cat}</>
        </Link>
      ))}
      </div>
      <div className='flex gap-4 mt-4 w-full'>
        {productList.map((prod: ProductHomeResponse, idx: number) => (
          <div key={idx} className='w-28'>
            <img src={`${prod.imagenes[0]}`} alt="" />
            <h2>{prod.titulo}</h2>
            <p>{prod.descripcion}</p>
            <p>{prod.ubicacion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
