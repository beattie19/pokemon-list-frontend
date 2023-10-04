import { Pokemon } from "./types/types";
import {
  FilterRange,
  ValueFilters,
} from "./components/Filters/usePokemonFilterState";

//allow currying so we can use the output directly into the next function
const filterBySearchTerm = (pokemons: Pokemon[], searchTerm: string) => {
  if (!searchTerm) return pokemons;

  return pokemons.filter((pokemon: Pokemon) => {
    return pokemon.name
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });
};

const filterByWeight = (pokemons: Pokemon[], weightFilter: FilterRange) =>
  pokemons.filter(
    (pokemon) =>
      pokemon.weight >= weightFilter[0] && pokemon.weight <= weightFilter[1]
  );

const filterByHeight = (pokemons: Pokemon[], heightFilter: FilterRange) =>
  pokemons.filter(
    (pokemon) =>
      pokemon.height >= heightFilter[0] && pokemon.height <= heightFilter[1]
  );

const filterByAttack = (pokemons: Pokemon[], attackFilter: FilterRange) =>
  pokemons.filter(
    (pokemon) =>
      pokemon.baseStats.attack >= attackFilter[0] &&
      pokemon.baseStats.attack <= attackFilter[1]
  );

export const filterPokemon = (
  pokemons: Pokemon[],
  searchTerm: string,
  { weight, height, attack }: ValueFilters
): Pokemon[] => {
  pokemons = filterBySearchTerm(pokemons, searchTerm);
  pokemons = filterByWeight(pokemons, weight);
  pokemons = filterByHeight(pokemons, height);
  pokemons = filterByAttack(pokemons, attack);
  return pokemons.sort((a, b) => +a.id - +b.id);
};
