import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import './Page.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedHistory, setClickedHistory] = useState([]);
  const [error, setError] = useState(null); 

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
      setError(null); 
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("No products found: Check internet connection");
    }
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/search?query=${query}`
      );
      setProducts(response.data);
      setError(null); 
    } catch (error) {
      console.error("Search failed:", error);
      setError("No products found: Check internet connection");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      fetchSearchResults(query);
    } else {
      fetchProducts();
    }
  };

  const handleProductClick = async (product) => {
    setClickedHistory((prev) => [...prev, product]);
    setSearchQuery("");
    fetchProducts();

    try {
      await axios.post("http://localhost:5000/api/products/click", {
        productId: product._id || product.id,
      });
    } catch (error) {
      console.error("Failed to log click:", error);
    }
  };

  const lastClicked = clickedHistory[clickedHistory.length - 1];

  const recommendedFromClick = lastClicked
    ? products.filter(
        (p) =>
          p.category === lastClicked.category &&
          (p._id || p.id) !== (lastClicked._id || lastClicked.id)
      )
    : [];

  const recommendedFromSearch =
    searchQuery && products.length > 0
      ? products.filter(
          (p) =>
            p.category === products[0].category &&
            (p._id || p.id) !== (products[0]._id || products[0].id)
        )
      : [];

  return (
    <>
      <div className='app'>
        <br />
        <SearchBar onSearch={handleSearch} />
        <br /><br />

        {error && (
          <div className="error-message" >
            {error}
          </div>
        )}

        {!error && (
          <>
            <h3>{searchQuery ? "Search Results:" : "All Products"}</h3>
            <ProductList products={products} onProductClick={handleProductClick} />

            {searchQuery && recommendedFromSearch.length > 0 && (
              <>
                <h3>Recommended (based on search):</h3>
                <ProductList
                  products={recommendedFromSearch}
                  onProductClick={handleProductClick}
                />
              </>
            )}

            {!searchQuery && recommendedFromClick.length > 0 && (
              <>
                <h3>Recommended (based on last clicked):</h3>
                <ProductList
                  products={recommendedFromClick}
                  onProductClick={handleProductClick}
                />
              </>
            )}

            {clickedHistory.length > 0 && (
              <div>
                <h3>Previously Clicked:</h3>
                <ul>
                  {clickedHistory.map((p, index) => (
                    <li key={`${p._id || p.id}-${index}`}>
                      {p.name} — ₹{p.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Home;
