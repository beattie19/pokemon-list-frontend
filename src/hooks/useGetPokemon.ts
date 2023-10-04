import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "src/App";
import { pokemonMock } from "src/pokemonMock";

export const useGetPokemon = (): Pokemon[] => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  const url = process.env.POKEMON_LIST;

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

  return pokemons;
};
