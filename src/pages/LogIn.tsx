import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

type LogInData = {
  email: string;
  contraseña: string;
};

function LogIn() {
  const { register, handleSubmit } = useForm<LogInData>();
  const navigate = useNavigate();

  const onSubmit = async (data: LogInData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.contraseña);
      console.log('Inicio de sesión exitoso:', userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='w-3xl mx-auto mt-8 flex flex-col gap-4'>
      <form
        className='flex flex-col border border-gray-300 rounded-md p-4 gap-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <legend>Iniciar sesión</legend>
        <label htmlFor='email'>Email:</label>
        <input
          {...register('email')}
          name='email'
          id='email'
          type='email'
        />
        <label htmlFor='contraseña'>Contraseña:</label>
        <input
          {...register('contraseña')}
          name='contraseña'
          id='contraseña'
          type='password'
        />
        <button type='submit'>Iniciar sesión</button>
      </form>
      <Link to='/signup'>¿No tienes una cuenta? Regístrate</Link>
    </div>
  );
}
export default LogIn;
