import React, { useState } from "react";

type SearchBarProps = {
  searchTerm: string;
  handleSearchTermChange: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearchTermChange,
}) => {
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
