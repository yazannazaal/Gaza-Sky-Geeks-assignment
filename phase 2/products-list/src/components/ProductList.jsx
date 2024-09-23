import "../styles/ProductList.css";
import { string } from "prop-types";
export default function ProductList({ products }) {
  return (
    <div className="productsList">
      {products.map((product) => (
        <div key={product.id} className="productItem">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
ProductList.propTypes = {
  products: string.isRequired,
};
