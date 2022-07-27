import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title text", () => {
  render(<App />);
  const titleElement = screen.getByText(/todos/i);
  const inputPlaceholder = screen.getByPlaceholderText(
    /what needs to be done?/i
  );
  expect(titleElement).toBeInTheDocument();
  expect(inputPlaceholder).toBeInTheDocument();
});
