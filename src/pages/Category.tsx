import { useParams,useSearchParams } from 'react-router';
import Filters from '../components/Filters';
import { useFilterProducts } from '../services/products/products.queries';
import type { ProductHomeResponse } from '../services/products/products.types';

function Category() {
  const { categoria } = useParams()
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: products } = useFilterProducts(categoria ?? '', searchParams.toString());
  
  return (
    <div>
      <>{Filters(setSearchParams)}</>
      {products.map((p: ProductHomeResponse, idx: number) => (
        <div key={idx} className="w-28">
          <img src={`${p.imagenes[0]}`} alt="" />
          <h2>{p.titulo}</h2>
          <p>{p.descripcion}</p>
          <p>{p.ubicacion}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;
