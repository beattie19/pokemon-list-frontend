import React, { useState } from "react";
import { Card } from "components/Card";

type Pokemon = {
  name: string;
  id: string;
  sprite: string;
};
const App = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  fetch("http://127.0.0.1:8080/pokemon/cached/27")
    .then((response) => response.json())
    .then((data) =>
      setPokemon({
        name: data.name,
        id: data.id,
        sprite: data.sprites.front_default,
      })
    );

  if (!pokemon) return null;

  return (
    <>
      <h1>Pokemon List</h1>
      <Card pokemon={pokemon} />
    </>
  );
};

export default App;
