import { render } from "@testing-library/react";
import ChatBox from "./ChatBox";
import { ProblemContext } from "../../../contexts/ProblemContext";

test("ChatBox renders messages correctly", () => {
  // Mock the context value
  const mockContextValue = {
    message: [
      { user: "User1", data: "Hello" },
      { user: "User2", data: "Hi" },
    ],
  };

  // Render the ChatBox component
  const { container } = render(
    <ProblemContext.Provider value={mockContextValue}>
      <ChatBox />
    </ProblemContext.Provider>
  );

  // Check if the rendered messages match the expected messages
  const messages = container.querySelectorAll("div");
  expect(messages.length).toBe(2);
  expect(messages[0].textContent).toBe("User1: Hello");
  expect(messages[1].textContent).toBe("User2: Hi");
});
