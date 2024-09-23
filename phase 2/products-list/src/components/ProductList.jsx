import "../styles/ProductList.css";
import PropTypes from "prop-types";
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
