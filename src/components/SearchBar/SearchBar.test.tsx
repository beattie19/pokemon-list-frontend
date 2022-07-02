import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import SearchBar from ".";

describe("<SearchBar>", () => {
  test("renders correctly", async () => {
    const mockOnChange = jest.fn();
    const pokemonName = "Sandshrew";
    render(<SearchBar searchTerm="" handleSearchTermChange={mockOnChange} />);

    const searchBox = screen.getByRole("searchbox");
    await userEvent.type(searchBox, pokemonName);

    expect(mockOnChange).toBeCalledTimes(9);
  });
});
