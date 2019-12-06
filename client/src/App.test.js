import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<App />);
});

test("renders athlete text", () => {
  const { getByText } = render(<App />);
  getByText(/athlete/i);
});

test("renders Light Mode Toggle", () => {
  const { getByText } = render(<App />);
  getByText(/mode/i);
});
