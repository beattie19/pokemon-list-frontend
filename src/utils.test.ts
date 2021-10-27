import { filterPokemon } from "./utils";
import { pokemonMock } from "./pokemonMock";

test("filter by name", () => {
  expect(filterPokemon(pokemonMock(), "Ivy", [0, 1000]).length).toBe(1);
});
