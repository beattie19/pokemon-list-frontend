import React, { useEffect, useState } from "react";
import List from "components/List";
import styles from "./styles.module.scss";
import SearchBar from "components/SearchBar";
import Filter from "components/Filter";

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
  const [weightFilter, setWeightFilter] = useState<[number, number]>([
    undefined,
    undefined,
  ]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/pokemon/cached/all")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  useEffect(() => {
    const filteredPokemon = pokemons
      .filter((pokemon: Pokemon) => {
        return pokemon.name.includes(searchTerm);
      })
      .filter(
        (pokemon) =>
          pokemon.weight >= weightFilter[0] && pokemon.weight <= weightFilter[1]
      );
    setFilteredPokemon(filteredPokemon);
  }, [pokemons, searchTerm, weightFilter]);

  if (!pokemons) return null;

  return (
    <>
      <h1>Pokemon List</h1>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchTermChange={setSearchTerm}
      />
      <Filter weightFilter={weightFilter} setWeightFilter={setWeightFilter} />
      <div className={styles.listContainer}>
        <List pokemons={filteredPokemon} />
      </div>
    </>
  );
};

export default App;
