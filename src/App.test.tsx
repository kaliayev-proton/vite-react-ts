import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const linkElement = await screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});

test("does not render an learn angular link", () => {
  const { queryByText } = render(<App />);
  const linkElement = queryByText(/learn angular/i);
  expect(linkElement).not.toBeInTheDocument();
});
