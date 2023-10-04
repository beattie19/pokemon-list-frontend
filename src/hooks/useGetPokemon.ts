import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "src/types/types";
import { pokemonMock } from "src/pokemonMock";
import { filterPokemon } from "src/utils";
import usePokemonFilterState, {
  ActionType,
  ValueFilters,
} from "components/Filters/usePokemonFilterState";

export const useGetPokemon = (): {
  filters: ValueFilters;
  dispatch: React.Dispatch<ActionType>;
  filterPokemonForSearchTerm: (searchTerm: string) => Pokemon[];
  pokemons: Pokemon[];
} => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  const [state, dispatch] = usePokemonFilterState();
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

  const filterPokemonForSearchTerm = (searchTerm: string) =>
    filterPokemon(pokemons, searchTerm, state);

  return { filters: state, dispatch, filterPokemonForSearchTerm, pokemons };
};
