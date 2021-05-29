import React, { useEffect, useState } from "react";
import List from "components/List";
import styles from "./styles.module.scss";
import SearchBar from "components/SearchBar";

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
  useEffect(() => {
    fetch("http://127.0.0.1:8080/pokemon/cached/all")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  if (!pokemons) return null;

  return (
    <>
      <h1>Pokemon List</h1>
      <SearchBar />
      <div className={styles.listContainer}>
        <List pokemons={pokemons} />
      </div>
    </>
  );
};

export default App;
