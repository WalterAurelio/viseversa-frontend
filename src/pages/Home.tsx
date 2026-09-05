import { signOut } from "firebase/auth";
import { auth } from "../firebase/auth";
import { useAuthStore } from "../store/authStore";
import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

function Home() {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      queryClient.removeQueries({ queryKey: ["userProfile"] });
      console.log("Cierre de sesión exitoso");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="mx-auto mt-8 flex w-3xl flex-col items-center gap-2 rounded-md border border-gray-300 p-8">
      <h1 className="text-2xl font-bold">Bienvenido a ViseVersa</h1>
      <p className="text-lg font-bold text-gray-500">Usuario: {user?.email}</p>
      <Link to="/profile">Ir a Perfil</Link>
      <button data-testid="logout-button" className="w-full rounded-md bg-red-500 p-2 text-white hover:bg-red-600" onClick={handleLogOut}>
        Cerrar sesión
      </button>
    </div>
  );
}
export default Home;
