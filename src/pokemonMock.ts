import { Pokemon } from "./App";

export const pokemonMock = (): Pokemon[] => {
  return [
    {
      id: "1",
      name: "Bulbasaur",
      weight: 100,
      height: 10,
      sprite: "some+url.com",
      types: ["type1", "type2"],
      baseStats: {
        attack: 10,
        specialAttack: 10,
        defence: 10,
        specialDefence: 10,
        speed: 10,
        hp: 10,
      },
    },
    {
      id: "2",
      name: "Ivysaur",
      weight: 200,
      height: 20,
      sprite: "some+url.com",
      types: ["type1", "type2"],
      baseStats: {
        attack: 20,
        specialAttack: 20,
        defence: 20,
        specialDefence: 20,
        speed: 20,
        hp: 20,
      },
    },
  ];
};
