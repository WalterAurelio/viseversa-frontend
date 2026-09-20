import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { auth } from "../firebase/auth";
import { useRegister } from "../services/users/users.queries";
import { Link, useNavigate } from "react-router";
import { signupSchema, type SignupSchema } from "../schemas/signupSchema";
import { createForm } from "../utils/createForm";
import Button from "../components/Button";

const { Form, InputContainer, Input } = createForm(signupSchema);

function SignUp() {
  const { mutateAsync } = useRegister();
  const navigate = useNavigate();

  const onSubmit = async (data: SignupSchema) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("Registro exitoso:", userCredential.user);
      await mutateAsync({
        name: data.name,
        lastName: data.lastName,
        username: data.username
      });
      navigate("/");
    } catch (error) {
      console.error("Error al registrarse:", error);
      if (auth.currentUser) {
        try {
          await deleteUser(auth.currentUser);
          console.log("Usuario eliminado de Firebase Authentication debido a un error en la creación del usuario en la base de datos.");
        } catch (rollbackError) {
          console.error("Error al eliminar el usuario de Firebase Authentication:", rollbackError);
        }
      }
      alert("Error al registrarse. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputContainer htmlFor="email" label="Email:">
          <Input id="email" name="email" placeholder="Ingresa tu email" className="w-full" />
        </InputContainer>
        <InputContainer htmlFor="password" label="Contraseña:">
          <Input id="password" name="password" placeholder="Ingresa tu contraseña" type="password" className="w-full" />
        </InputContainer>
        <InputContainer htmlFor="name" label="Nombre:">
          <Input id="name" name="name" placeholder="Ingresa tu nombre" className="w-full" />
        </InputContainer>
        <InputContainer htmlFor="lastName" label="Apellido:">
          <Input id="lastName" name="lastName" placeholder="Ingresa tu apellido" className="w-full" />
        </InputContainer>
        <InputContainer htmlFor="username" label="Nombre de usuario:">
          <Input id="username" name="username" placeholder="Ingresa tu nombre de usuario" className="w-full" />
        </InputContainer>
        <Button type="submit">Registrarse</Button>
      </Form>
      <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
    </div>
  );
}
export default SignUp;
