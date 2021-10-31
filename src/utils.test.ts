import { filterPokemon } from "./utils";
import { pokemonMock } from "./pokemonMock";

test("filter by name", () => {
  expect(filterPokemon(pokemonMock(), "Ivy", [0, 9999]).length).toBe(1);
});

test("filter by weight", () => {
  expect(filterPokemon(pokemonMock(), "saur", [1000, 9999]).length).toBe(1);
});

test("sort pokemon ascending by id", () => {
  const result = filterPokemon(pokemonMock(), "", [0, 9999]);
  expect(result[0].id).toBe("1");
  expect(result[1].id).toBe("2");
  expect(result[2].id).toBe("3");
});
