import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useRegister } from '../services/users/users.queries';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

type SignUpData = {
  email: string;
  contraseña: string;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
};

function SignUp() {
  const { register, handleSubmit } = useForm<SignUpData>();
  const { mutateAsync } = useRegister();
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.contraseña);
      console.log('Registro exitoso:', userCredential.user);
      await mutateAsync({
        nombre: data.nombre,
        apellido: data.apellido,
        nombreUsuario: data.nombreUsuario
      });
      navigate('/');
    } catch (error) {
      console.error('Error al registrarse:', error);
      // Si ocurre un error, elimina el usuario de Firebase Authentication
      if (auth.currentUser) {
        try {
          await deleteUser(auth.currentUser);
          console.log('Usuario eliminado de Firebase Authentication debido a un error en la creación del usuario en la base de datos.');
        } catch (rollbackError) {
          console.error('Error al eliminar el usuario de Firebase Authentication:', rollbackError);
        }
      }
      // Muestra un mensaje de error al usuario
      alert('Error al registrarse. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className='w-3xl mx-auto mt-8 flex flex-col gap-4'>
      <form
        className='flex flex-col border border-gray-300 rounded-md p-4 gap-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <legend>Registrarse</legend>
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
        <label htmlFor='nombre'>Nombre:</label>
        <input
          {...register('nombre')}
          name='nombre'
          id='nombre'
          type='text'
        />
        <label htmlFor='apellido'>Apellido:</label>
        <input
          {...register('apellido')}
          name='apellido'
          id='apellido'
          type='text'
        />
        <label htmlFor='nombreUsuario'>Nombre de usuario:</label>
        <input
          {...register('nombreUsuario')}
          name='nombreUsuario'
          id='nombreUsuario'
          type='text'
        />
        <button type='submit'>Registrarse</button>
      </form>
      <Link to='/'>¿Ya tienes una cuenta? Inicia sesión</Link>
    </div>
  );
}
export default SignUp;
