import React, { useEffect, useReducer, useState } from "react";
import List from "components/List";
import styles from "./styles.module.scss";
import SearchBar from "components/SearchBar";
import { filterPokemon } from "./utils";
import usePokemonFilterState from "components/Filters/usePokemonFilterState";
import Filters from "components/Filters";
import { pokemonMock } from "./pokemonMock";

export type BaseStats = {
  hp: number;
  attack: number;
  defence: number;
  specialDefence: number;
  specialAttack: number;
  speed: number;
};

export type Pokemon = {
  name: string;
  id: string;
  sprite: string;
  height: number;
  weight: number;
  types: string[];
  baseStats: BaseStats;
};

const App = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Array<Pokemon>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [state, dispatch] = usePokemonFilterState();

  const url = process.env.POKEMON_LIST;

  useEffect(() => {
    if (process.env.POKEMON_LIST === "mock") {
      setPokemons(pokemonMock());
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPokemons(data.body));
    }
  }, [url]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8080/pokemon/cached/all")
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data));
  // }, []);

  useEffect(() => {
    const filteredPokemon = filterPokemon(
      pokemons,
      searchTerm,
      state.weight,
      state.height
    );
    setFilteredPokemon(filteredPokemon);
  }, [pokemons, searchTerm, state]);

  if (!pokemons) return null;
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
