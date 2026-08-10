import { signOut } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

function Home() {
  const user = useAuthStore(state => state.user);
  const queryClient = useQueryClient();

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
    </div>
  );
}
export default Home;
