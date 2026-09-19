import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/auth";
import { Link, useNavigate } from "react-router";
import { loginSchema, type LoginSchema } from "../schemas/loginSchema";
import { createForm } from "../utils/createForm";
import Button from "../components/Button";

const { Form, InputContainer, Input } = createForm(loginSchema);

function LogIn() {
  const navigate = useNavigate();

  const onSubmit = async (data: LoginSchema) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("Inicio de sesión exitoso:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
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
        <Button type="submit">Iniciar sesión</Button>
      </Form>
      <Link to="/signup">¿No tienes una cuenta? Regístrate</Link>
    </div>
  );
}
export default LogIn;
