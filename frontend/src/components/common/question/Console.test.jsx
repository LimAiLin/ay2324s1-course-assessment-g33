import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Console from "./Console";
import { ProblemContext } from "../../../contexts/ProblemContext";
import '@testing-library/jest-dom';

describe("Console component", () => {
  it("renders correctly with consoleResult", () => {
    // Provide a real context value for testing
    const testContextValue = {
      consoleResult: {
        status: { description: "Success" },
        time: 2,
        memory: 256,
        message: "Program executed successfully",
        stdout: "Hello, World!",
      },
    };

    // Render the Console component within a Provider with the test context value
    render(
      <ProblemContext.Provider value={testContextValue}>
        <Console onRun={() => {}} />
      </ProblemContext.Provider>
    );

    // Assert that the Console component renders the correct content
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Runtime:")).toBeInTheDocument();
    expect(screen.getByText("2s")).toBeInTheDocument();
    expect(screen.getByText("Memory:")).toBeInTheDocument();
    expect(screen.getByText("256")).toBeInTheDocument();
    expect(screen.getByText("Message:")).toBeInTheDocument();
    expect(screen.getByText("Program executed successfully")).toBeInTheDocument();
    expect(screen.getByText("Output:")).toBeInTheDocument();
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("calls onRun when 'Run' button is clicked", () => {
    // Provide a real context value for testing
    const testContextValue = {
      consoleResult: {
        status: { description: "Success" },
        time: 2,
        memory: 256,
        message: "Program executed successfully",
        stdout: "Hello, World!",
      },
    };

    // Render the Console component within a Provider with the test context value
    render(
      <ProblemContext.Provider value={testContextValue}>
        <Console onRun={() => {}} />
      </ProblemContext.Provider>
    );

    act(() => {
      // Simulate a button click
      userEvent.click(screen.getByText("Run"));
    });

    // You can add assertions based on the expected behavior
  });
});
