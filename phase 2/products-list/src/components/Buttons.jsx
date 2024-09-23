import "../styles/Buttons.css";
import PropTypes from "prop-types";
export default function Buttons({ onFilterChange }) {
  const categories = ["All", "Electronics", "Clothing", "Accessories"];

  return (
    <div className="filteringSection">
      {categories.map((category) => (
        <button key={category} onClick={() => onFilterChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}
Buttons.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
