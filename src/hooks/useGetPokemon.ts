import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "src/types/types";
import { pokemonMock } from "src/pokemonMock";
import { filterPokemon } from "src/utils";
import usePokemonFilterState, {
  ActionType,
  ValueFilters,
} from "components/Filters/usePokemonFilterState";
import { set } from "cypress/types/lodash";

export const useGetPokemon = (): {
  filters: ValueFilters;
  dispatch: React.Dispatch<ActionType>;
  updateFilteredPokemonForSearchTerm: (searchTerm: string) => void;
  pokemons: Pokemon[];
  filteredPokemon: Pokemon[];
} => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [state, dispatch] = usePokemonFilterState();
  const url = process.env.POKEMON_LIST;

  const initialPokemonList = useCallback(() => pokemonMock(), []);

  useEffect(() => {
    if (process.env.POKEMON_LIST === "mock") {
      setPokemons(initialPokemonList());
      setFilteredPokemon(initialPokemonList());
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.body);
          setFilteredPokemon(data.body);
        });
    }
  }, [url, initialPokemonList]);

  const updateFilteredPokemonForSearchTerm = (searchTerm: string) =>
    setFilteredPokemon(filterPokemon(pokemons, searchTerm, state));

  return {
    filters: state,
    dispatch,
    updateFilteredPokemonForSearchTerm,
    pokemons,
    filteredPokemon,
  };
};
