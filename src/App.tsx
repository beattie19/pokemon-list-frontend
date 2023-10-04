import React, { useCallback, useEffect, useState } from "react";
import List from "./components/List";
import styles from "./styles.module.scss";
import SearchBar from "./components/SearchBar";
import { filterPokemon } from "./utils";
import usePokemonFilterState from "./components/Filters/usePokemonFilterState";
import Filters from "./components/Filters";
import { debounce } from "lodash";
import { useGetPokemon } from "./hooks/useGetPokemon";
import { Pokemon } from "./types/types";

const App = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, dispatch] = usePokemonFilterState();
  const pokemons = useGetPokemon();

  const filteredPokemonDebounce = debounce(

  const initialPokemonList = useCallback(() => pokemonMock(), []);

  useEffect(() => {
    if (process.env.POKEMON_LIST === "mock") {
      setPokemons(initialPokemonList());
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.body);
        });
    }
  }, [url, initialPokemonList]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8080/pokemon/cached/all")
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data));
  // }, []);

  // useEffect(() => {

  // }, [pokemons, searchTerm, state]);

  console.log("rendered");
  if (!pokemons) return null;

  const filteredPokemon = filterPokemon(
    initialPokemonList(),
    searchTerm,
    state
  );
    setFilteredPokemon(filteredPokemon);
  return (
    <>
      <h1>Pokemon List</h1>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchTermChange={setSearchTerm}
      />
      <Filters filterState={state} dispatch={dispatch} />
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
