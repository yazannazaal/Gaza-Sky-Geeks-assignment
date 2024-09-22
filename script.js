const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Women Shirt", category: "Clothing", price: 29 },
  { name: "iPhone", category: "Electronics", price: 699 },
  { name: "Men Jacket", category: "Clothing", price: 89 },
  { name: "Sunglasses", category: "Accessories", price: 89 },
  { name: "Bracelet", category: "Accessories", price: 89 },
  { name: "Headphones", category: "Electronics", price: 199 },
  { name: "Skirt", category: "Clothing", price: 49 },
];

function displayProducts(productsToDisplay) {
  const productList = document.getElementById("productsList");
  productList.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "productItem";
    productItem.innerHTML = `
              <h2>${product.name}</h2>
              <p>Category: ${product.category}</p>
              <p>Price: $${product.price}</p>
              <button>Add to cart</button>
          `;
    productList.appendChild(productItem);
  });
}

function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

displayProducts(products);
