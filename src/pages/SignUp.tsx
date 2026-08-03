import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

function SignUp() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const objectData = Object.fromEntries(formData.entries());
      const email = objectData.email as string;
      const password = objectData.password as string;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registro exitoso:', userCredential.user);
      navigate('/'); // Redirige a la página de inicio después del registro exitoso
    } catch (error) {
      console.error('Error al registrarse:', error);
      const message = error instanceof Error ? error.message : 'Error al registrarse. Por favor, inténtalo de nuevo.';
      setErrorMessage(message);
    }
  };

  return (
    <div>
      <form
        className='p-8 border border-gray-300 rounded-md flex flex-col gap-2 w-3xl mx-auto mt-8'
        onSubmit={handleSubmit}
      >
        <legend className='text-2xl font-bold'>Registrarse</legend>

        <label htmlFor='email'>Email:</label>
        <input
          name='email'
          id='email'
          type='email'
          className='border border-gray-300 rounded-md p-2'
        />
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          id='password'
          type='password'
          className='border border-gray-300 rounded-md p-2'
        />
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
        >
          Registrarse
        </button>
      </form>

      <Link
        to='/'
        className='block text-center mt-4 text-blue-500 hover:underline'
      >
        ¿Ya tienes una cuenta? Inicia sesión
      </Link>
    </div>
  );
}
export default SignUp;
