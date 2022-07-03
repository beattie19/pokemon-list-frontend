import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";
import { pokemonMock } from "./pokemonMock";

describe("<App>", () => {
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ body: pokemonMock() }),
      } as Response);
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  test("renders correctly", async () => {
    render(<App />);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: /bulbasaur/i })
      ).toBeInTheDocument()
    );

    expect(screen.getByText("Showing 3 of 3"));
  });

  test("Can successfully filter by name", async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText("Showing 3 of 3")));
    await userEvent.type(screen.getByRole("searchbox"), "Bulb");
    await waitFor(() => expect(screen.getByText("Showing 1 of 3")));
  });

  test("Can successfully filter by name that does not match case sensitivity", async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText("Showing 3 of 3")));
    await userEvent.type(screen.getByRole("searchbox"), "bulb");
    await waitFor(() => expect(screen.getByText("Showing 1 of 3")));
  });

  test("Can successfully filter by weight", async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText("Showing 3 of 3")));

    const minWeightFilterInput = screen.getByTestId("weight-min");
    const maxWeightFilterInput = screen.getByTestId("weight-max");

    await userEvent.type(minWeightFilterInput, "1");
    expect(minWeightFilterInput).toHaveValue(1);

    await userEvent.clear(maxWeightFilterInput);
    await userEvent.type(maxWeightFilterInput, "101");
    expect(maxWeightFilterInput).toHaveValue(101);

    await waitFor(() => expect(screen.getByText("Showing 1 of 3")));
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  test("Can successfully filter by height", async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText("Showing 3 of 3")));

    const minHeightFilterInput = screen.getByTestId("height-min");
    const maxHeightFilterInput = screen.getByTestId("height-max");

    await userEvent.type(minHeightFilterInput, "1");
    expect(minHeightFilterInput).toHaveValue(1);

    await userEvent.clear(maxHeightFilterInput);
    await userEvent.type(maxHeightFilterInput, "11");
    expect(maxHeightFilterInput).toHaveValue(11);

    await waitFor(() => expect(screen.getByText("Showing 1 of 3")));
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});
