import { useAuthStore } from "../store/authStore";
import { useQueryClient } from "@tanstack/react-query";
import { useGetProducts } from "../services/products/products.queries";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/auth";
import { Link } from "react-router";

function Home() {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();
  const { data } = useGetProducts();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      queryClient.removeQueries({ queryKey: ["userProfile"] });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="m-8 flex w-7xl flex-col items-center gap-2 rounded-md border border-gray-300 p-8">
      <h1 className="text-2xl font-bold">Bienvenido a ViseVersa</h1>
      <p className="text-lg font-bold text-gray-500">Usuario: {user?.email}</p>
      <Link to="/profile">Ir a Perfil</Link>
      <button className="w-full rounded-md bg-red-500 p-2 text-white hover:bg-red-600" onClick={handleLogOut}>
        Cerrar sesión
      </button>
      <div>
        <h2 className="mb-2 text-xl font-bold">Categorías:</h2>
        <Link to="/zapatillas">Zapatillas</Link>
        <Link to="/remera">Remeras</Link>
      </div>
      <div className="mt-4 w-full">
        <h2 className="mb-2 text-xl font-bold">Productos:</h2>
        <div className="grid grid-cols-2 gap-4">
          {data?.map((product) => (
            <div key={product.id} className="border border-gray-300 p-4">
              <img src={product.image} alt={product.title} className="mb-2 aspect-square h-32 object-cover" />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-500">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
