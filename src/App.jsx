import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://veebipood-backend-f4it.onrender.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

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