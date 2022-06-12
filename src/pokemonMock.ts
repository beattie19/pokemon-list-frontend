import { Pokemon } from "./App";

//create a mock builder class
export const pokemonMock = (): Pokemon[] => {
  return [
    {
      id: "3",
      name: "Venusaur",
      weight: 1000,
      height: 100,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      types: ["type1", "type2"],
      baseStats: {
        attack: 30,
        specialAttack: 30,
        defence: 30,
        specialDefence: 30,
        speed: 30,
        hp: 30,
      },
    },
    {
      id: "1",
      name: "Bulbasaur",
      weight: 100,
      height: 10,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
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
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
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
