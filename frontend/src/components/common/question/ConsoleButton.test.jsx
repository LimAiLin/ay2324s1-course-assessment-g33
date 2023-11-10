// Import necessary dependencies and the ConsoleButton component
import { render, screen } from "@testing-library/react";
import ConsoleButton from "./ConsoleButton";
import '@testing-library/jest-dom';
import React from "react";

describe("ConsoleButton Component", () => {
  it("should render the button with title when not loading", () => {
    render(<ConsoleButton title="Run" loading={false} />);
    
    // Assert that the button and title are rendered
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Run")).toBeInTheDocument();
    expect(screen.queryByTestId("loading-icon")).toBeNull(); // Loading icon should not be present
  });

  it("should render the button with loading icon when loading", () => {
    render(<ConsoleButton title="Run" loading={true} />);
    
    // Assert that the button and loading icon are rendered
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.queryByText("Run")).toBeNull(); // Title should not be present
    expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
  });

  it("should pass other props to the button element", () => {
    const onClick = jest.fn();
    render(<ConsoleButton title="Run" loading={false} onClick={onClick} />);
    
    const button = screen.getByRole("button");

    // Assert that the button element has the expected props
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button"); // Default type for Button
    expect(button).toHaveStyle({ backgroundColor: "secondary.main" });

    // Simulate a button click
    button.click();

    // Assert that the onClick callback is called when the button is clicked
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
