import { useState } from "react";
import './components.css';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <>
    <nav className="pd-10">
    <div className="container-fluid">
    <form className="d-flex" role="search">
      <input
        className="form-control me-2 rounded-pill border-2 border-secondary focus-glow"
        type="text"
        placeholder ="Search for a product..."
        value={query}
        onChange={handleSearch}
        aria-label="Search"
      />
    </form>
  </div>
</nav>
    </>
  );
};

export default SearchBar;