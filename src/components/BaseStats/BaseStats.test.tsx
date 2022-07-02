import { render, screen } from "@testing-library/react";
import React from "react";
import { BaseStats } from ".";

const mockBaseStats = {
  attack: 30,
  specialAttack: 30,
  defence: 30,
  specialDefence: 30,
  speed: 30,
  hp: 30,
};

describe("<BaseStats /", () => {
  test("Renders correctly", () => {
    const expectedStatNamesInOrder = [
      "hp",
      "attack",
      "defence",
      "sp. attack",
      "sp. defense",
      "speed",
    ];

    render(<BaseStats baseStats={mockBaseStats} />);
    const statListItems = screen.getAllByRole("listitem");

    expect(statListItems.length).toEqual(expectedStatNamesInOrder.length);
    statListItems.map((stat, index) => {
      expect(stat).toHaveTextContent(
        new RegExp(expectedStatNamesInOrder[index], "i")
      );
    });
  });
});
