import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  const handleSearch = async () => {
    if (!query) return fetchProducts();

    try {
      const res = await axios.get(`http://localhost:5000/api/products/search?query=${query}`);
      setProducts(res.data);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  const handleProductClick = async (productId) => {
    try {
      await axios.post("http://localhost:5000/api/products/click", { productId });
      console.log("Click logged for product:", productId);
    } catch (err) {
      console.error("Click logging failed", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div style={{paddingRight: "340 px ", paddingLeft:"340px",}}>
      <center><h1>Smart Shop 🛍️</h1></center>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{ padding: "10px" }}>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={handleProductClick} />
        ))}
        </div>
      </div>
    </>
  );
};

export default Home;
