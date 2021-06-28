import React from "react";
import { render, screen } from "@testing-library/react";

import { RollupDemo } from "../index";

describe("<Component />", () => {
  test("rendered text", () => {
    render(<RollupDemo />);
    expect(screen.getByText('Learn React')).toBeDefined();
  });
});