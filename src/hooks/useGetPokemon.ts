import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "src/types/types";
import { pokemonMock } from "../pokemonMock";
import { defaultFilterPokemon, filterPokemon } from "../utils";
import usePokemonFilterState, {
  ActionType,
  ValueFilters,
} from "../components/Filters/usePokemonFilterState";

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
      setFilteredPokemon(defaultFilterPokemon(initialPokemonList()));
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
