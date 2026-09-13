import { useParams, useSearchParams } from "react-router";
import { useGetProductsByCategory } from "../services/products/products.queries";
import Filter from "../components/Filter";

function Category() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { data } = useGetProductsByCategory(category!, searchParams.toString());

  return (
    <div>
      <h1>Categoría: {category}</h1>
      <Filter />
      <div>
        {data.map((product, index) => (
          <div key={index} className="w-28">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <img src={`${product.image}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Category;
