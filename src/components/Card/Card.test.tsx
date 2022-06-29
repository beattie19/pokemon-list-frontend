import React from "react";
import { render, screen } from "@testing-library/react";
import { pokemonMock } from "../../pokemonMock";
import { Card } from ".";

const bulbasaurMock = pokemonMock()[1];

describe("Card", () => {
  test("renders correctly", () => {
    render(<Card pokemon={bulbasaurMock} />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Bulbasaur" })
    ).toBeInTheDocument();
    expect(screen.getByAltText("pokemon image")).toBeInTheDocument();
    expect(screen.getByText(/height/i)).toBeInTheDocument();
    expect(screen.getByText(/hp/i)).toBeInTheDocument();
  });
});
