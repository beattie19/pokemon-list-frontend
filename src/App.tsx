import React, { useEffect, useReducer, useState } from "react";
import List from "components/List";
import styles from "./styles.module.scss";
import SearchBar from "components/SearchBar";
import Filter from "components/Filter";
import { filterPokemon } from "./utils";

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

export type FilterRange = [number, number];

export type ValueFilters = {
  weight: FilterRange;
};

export enum FilterAction {
  SetMaxWeight = "setMaxWeight",
  SetMinWeight = "setMinWeight",
  Reset = "reset",
}

export type ActionType = {
  type: FilterAction;
  payload: number;
};

const MIN_FILTER_VALUE = 0;
const MAX_FILTER_VALUE = 9999;

const init = (): ValueFilters => {
  return { weight: [MIN_FILTER_VALUE, MAX_FILTER_VALUE] };
};

const reducer = (state: ValueFilters, action: ActionType): ValueFilters => {
  switch (action.type) {
    case FilterAction.SetMaxWeight:
      return { ...state, weight: [state.weight[0], action.payload] };
    case FilterAction.SetMinWeight:
      return { ...state, weight: [action.payload, state.weight[1]] };
    case FilterAction.Reset:
      return init();
    default:
      throw new Error();
  }
};

const App = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Array<Pokemon>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [state, dispatch] = useReducer(reducer, init());

  const url = process.env.POKEMON_LIST;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemons(data.body));
  }, [url]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8080/pokemon/cached/all")
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data));
  // }, []);

  useEffect(() => {
    const filteredPokemon = filterPokemon(pokemons, searchTerm, state.weight);
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
      <Filter filterState={state} dispatch={dispatch} />
      <p>
        Showing {filteredPokemon.length} of {pokemons.length}
      </p>
      <div className={styles.listContainer}>
        <List pokemons={filteredPokemon} />
      </div>
    </>
  );
};

export default App;
