import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (inputSearchTerm: string) => {
    setSearchTerm(inputSearchTerm);
  };

  return (
    <input
      type="search"
      name="searchBar"
      id="searchBar"
      placeholder="Search for pokemon"
      onChange={({ target: { value } }) => handleSearchTermChange(value)}
      value={searchTerm}
    />
  );
};

export default SearchBar;
