import "./index.css";
import Buttons from "./components/Buttons";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category) => {
    setFilter(category);
  };
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Women Shirt", category: "Clothing", price: 29 },
    { id: 3, name: "iPhone", category: "Electronics", price: 699 },
    { id: 4, name: "Men Jacket", category: "Clothing", price: 89 },
    { id: 5, name: "Sunglasses", category: "Accessories", price: 89 },
    { id: 6, name: "Bracelet", category: "Accessories", price: 89 },
  ];
  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);
  return (
    <div className="App">
      <Header />
      <main>
        <Buttons onFilterChange={handleFilterChange} />
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
