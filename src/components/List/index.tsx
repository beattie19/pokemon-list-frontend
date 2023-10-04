import { Card } from "../Card";
import React from "react";
import { Pokemon } from "src/types/types";

type ListProps = {
  pokemons: Array<Pokemon>;
};

const List: React.FC<ListProps> = ({ pokemons }) => (
  <>
    {pokemons.map((pokemon) => (
      <Card key={pokemon.id} pokemon={pokemon} />
    ))}
  </>
);

export default List;
