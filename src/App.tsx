import React, { useState } from "react";
import { Card } from "components/Card";
import List from "components/List";
import styles from "./styles.module.scss";

export type Pokemon = {
  name: string;
  id: string;
  sprite: string;
};

const App = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  // fetch("http://127.0.0.1:8080/pokemon/cached/27")
  //   .then((response) => response.json())
  //   .then((data) =>
  //     setPokemons({
  //       name: data.name,
  //       id: data.id,
  //       sprite: data.sprites.front_default,
  //     })
  //   );

  fetch("http://127.0.0.1:8080/pokemon/cached/all")
    .then((response) => response.json())
    .then((data) => setPokemons(data));

  if (!pokemons) return null;

  return (
    <div class={styles.listContainer}>
      <List pokemons={pokemons} />
    </div>
  );
};

export default App;
