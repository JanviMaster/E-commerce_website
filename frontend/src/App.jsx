import { useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import products from "./data/products";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedHistory, setClickedHistory] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleProductClick = (product) => {
    setClickedHistory((prev) => [...prev, product]);
    setSearchQuery(""); 
  };

  const filteredProducts = searchQuery
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const lastClicked = clickedHistory[clickedHistory.length - 1];
  const recommendedFromClick = lastClicked
    ? products.filter(
        (p) =>
          p.category === lastClicked.category && p.id !== lastClicked.id
      )
    : [];

  const recommendedFromSearch =
    searchQuery && filteredProducts.length > 0
      ? products.filter(
          (p) =>
            p.category === filteredProducts[0].category &&
            !filteredProducts.includes(p)
        )
      : [];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Smart Shop</h1>

      <SearchBar onSearch={handleSearch} />

      <h3>{searchQuery ? "Search Results:" : "All Products"}</h3>
      <ProductList
        products={filteredProducts}
        onProductClick={handleProductClick}
      />

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
              <li key={index}>
                {p.name} — ₹{p.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
