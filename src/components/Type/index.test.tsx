import React from "react";
import { render } from "@testing-library/react";
import { Type } from ".";

describe("App Component", function () {
  it("Renders correctly for single types", function () {
    const { getByText } = render(<Type types={["poison"]} />);
    expect(getByText("poison"));
  });

  it("Renders correctly for multiple types", function () {
    const { getByText } = render(<Type types={["poison, fire"]} />);
    expect(getByText("poison, fire"));
  });
});
