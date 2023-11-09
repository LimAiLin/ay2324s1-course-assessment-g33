// Import necessary dependencies and the ConsoleButton component
import { render, screen } from "@testing-library/react";
import ConsoleButton from "./ConsoleButton";
import '@testing-library/jest-dom'

test("ConsoleButton component renders correctly", () => {
  // Render the ConsoleButton component
  render(<ConsoleButton onClick={() => {}} title="Run" />);

  // Assert that the ConsoleButton component renders the correct content
  expect(screen.getByText("Run")).toBeInTheDocument();
});
