import { Pokemon } from "./App";

//allow currying so we can use the output directly into the next function
const filterBySearchTerm = (pokemons: Pokemon[], searchTerm: string) =>
  pokemons.filter((pokemon: Pokemon) => {
    return pokemon.name.includes(searchTerm);
  });

const filterByWeight = (pokemons: Pokemon[], weightFilter: [number, number]) =>
  pokemons.filter(
    (pokemon) =>
      pokemon.weight >= weightFilter[0] && pokemon.weight <= weightFilter[1]
  );

export const filterPokemon = (
  pokemons: Pokemon[],
  searchTerm: string,
  weightFilter: [number, number]
): Pokemon[] => {
  pokemons = filterBySearchTerm(pokemons, searchTerm);
  pokemons = filterByWeight(pokemons, weightFilter);
  return pokemons.sort((a, b) => +a.id - +b.id);
};
