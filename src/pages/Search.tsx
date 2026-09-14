import { useSearchParams } from "react-router";
import { useGetProductsBySearch } from "../services/products/products.queries";

function Search() {
  const [searchParams] = useSearchParams();
  const { data } = useGetProductsBySearch(searchParams.toString());

  return (
    <div>
      <h1>Resultados de búsqueda</h1>
      <div>
        {data.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Search;
