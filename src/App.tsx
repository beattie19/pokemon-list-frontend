import React, { useCallback, useEffect, useMemo, useState } from "react";
import List from "./components/List";
import styles from "./styles.module.scss";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { useGetPokemon } from "./hooks/useGetPokemon";
import { debounce } from "lodash";

const App = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    dispatch,
    updateFilteredPokemonForSearchTerm,
    filters,
    pokemons,
    filteredPokemon,
  } = useGetPokemon();

  const handleFilteringPokemon = (searchTerm: string) =>
    updateFilteredPokemonForSearchTerm(searchTerm);

  const filterPokemonRef = React.useRef(handleFilteringPokemon);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFilterPokemon = useCallback(
    debounce((searchTerm: string) => filterPokemonRef.current(searchTerm), 500),
    []
  );

  useEffect(() => {
    filterPokemonRef.current = handleFilteringPokemon;
  });

  useEffect(() => {
    debouncedFilterPokemon(searchTerm);

    return () => {
      debouncedFilterPokemon.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, searchTerm]);

  const handleSearchTermChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    debouncedFilterPokemon(searchTerm);
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
        Showing {filteredPokemon.length} of {pokemons.length}
      </p>
      <div className={styles.listContainer}>
        <List pokemons={filteredPokemon} />
      </div>
    </>
  );
};

export default App;
