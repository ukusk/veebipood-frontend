import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://veebipood-backend-f4it.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price} €</p>
          <p>Stock: {product.stock}</p>
          <p>Active: {product.active ? "Yes" : "No"}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;