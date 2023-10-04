import React, { useState } from "react";
import List from "./components/List";
import styles from "./styles.module.scss";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { useGetPokemon } from "./hooks/useGetPokemon";

const App = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch, filterPokemonForSearchTerm, filters, pokemons } =
    useGetPokemon();

  const filteredPokemons = filterPokemonForSearchTerm(searchTerm);

  const handleSearchTermChange = (searchTerm: string) => {
    console.log("searchTerm", searchTerm);
    setSearchTerm(searchTerm);
  };

  if (!pokemons) return null;

  return (
    <>
      <h1>Pokemon List</h1>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <Filters filterState={filters} dispatch={dispatch} />
      <p id="displayPokemonCount">
        Showing {filteredPokemons.length} of {pokemons.length}
      </p>
      <div className={styles.listContainer}>
        <List pokemons={filteredPokemons} />
      </div>
    </>
  );
};

export default App;
