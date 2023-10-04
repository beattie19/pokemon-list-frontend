import { filterPokemon } from "./utils";
import { pokemonMock } from "./pokemonMock";

test("filter by name matching case", () => {
  expect(
    filterPokemon(pokemonMock(), "Ivy", {
      weight: [0, 9999],
      height: [0, 9999],
      attack: [0, 9999],
    }).length
  ).toBe(1);
});

test("filter empty string for name", () => {
  expect(
    filterPokemon(pokemonMock(), "", {
      weight: [0, 9999],
      height: [0, 9999],
      attack: [0, 9999],
    }).length
  ).toBe(3);
});

test("filter by name without matching case", () => {
  expect(
    filterPokemon(pokemonMock(), "Ivy", {
      weight: [0, 9999],
      height: [0, 9999],
      attack: [0, 9999],
    }).length
  ).toBe(1);
});

test("filter by weight", () => {
  expect(
    filterPokemon(pokemonMock(), "saur", {
      weight: [1000, 9999],
      height: [0, 9999],
      attack: [0, 9999],
    }).length
  ).toBe(1);
});

test("filter by height", () => {
  expect(
    filterPokemon(pokemonMock(), "saur", {
      weight: [0, 9999],
      height: [0, 10],
      attack: [0, 9999],
    }).length
  ).toBe(1);
});

test("filter by attack", () => {
  expect(
    filterPokemon(pokemonMock(), "saur", {
      weight: [0, 9999],
      height: [0, 9999],
      attack: [0, 10],
    }).length
  ).toBe(1);
});

test("sort pokemon ascending by id", () => {
  const result = filterPokemon(pokemonMock(), "", {
    weight: [0, 9999],
    height: [0, 9999],
    attack: [0, 9999],
  });
  expect(result[0].id).toBe("1");
  expect(result[1].id).toBe("2");
  expect(result[2].id).toBe("3");
});
