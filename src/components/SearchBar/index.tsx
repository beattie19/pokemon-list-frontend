import React, { useState } from "react";
import styles from "./styles.module.scss";

type SearchBarProps = {
  searchTerm: string;
  handleSearchTermChange: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearchTermChange,
}) => {
  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        type="search"
        name="searchBar"
        id="searchBar"
        placeholder="Search for pokemon"
        onChange={({ target: { value } }) => handleSearchTermChange(value)}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
