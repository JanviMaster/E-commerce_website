import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <>
    <input
      type="text"
      placeholder="Search for a product..."
      value={query}
      onChange={handleSearch}
      style={{
        padding: "10px",
        margin: "70px" ,
        marginBottom: "20px",
        width: "100%",
        fontSize: "16px",
      }}
    />
    </>
  );
};

export default SearchBar;
