import React, { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  const data = {
    searchInput,
    handleSearch,
  };
  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
