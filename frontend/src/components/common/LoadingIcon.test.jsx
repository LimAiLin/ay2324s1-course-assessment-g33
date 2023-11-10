import { render, screen } from "@testing-library/react";
import LoadingIcon from "./LoadingIcon";
import { MATCHMAKING_TIMEOUT } from "../../utils/constants";
import "@testing-library/jest-dom";

describe("LoadingIcon", () => {
  it("should render CircularProgress when text is not 'Cancel'", () => {
    render(<LoadingIcon text="Loading" />);
    const loadingIcon = screen.getByTestId("loading-icon");
    expect(loadingIcon).toBeInTheDocument();
  });

  it("should render Countdown when text is 'Cancel'", () => {
    render(<LoadingIcon text="Cancel" />);
    const countdown = screen.getByText(/Cancel \d+/);
    expect(countdown).toBeInTheDocument();
  });

  it("should render Countdown with the correct time when text is 'Cancel'", () => {
    render(<LoadingIcon text="Cancel" />);
    const countdown = screen.getByText("Cancel 30"); // Adjust the expected time value as needed
    expect(countdown).toBeInTheDocument();
  });

  it("should calculate the Countdown date correctly", () => {
    const now = Date.now();
    const expectedDate = now + parseInt(MATCHMAKING_TIMEOUT);
    render(<LoadingIcon text="Cancel" />);
    const countdown = screen.getByText("Cancel");
    expect(countdown).toBeInTheDocument();
    const countdownProps = countdown.parentNode.querySelector(".react-countdown-container").getAttribute("data-ts");
    const actualDate = parseInt(countdownProps);
    expect(actualDate).toBe(expectedDate);
  });
});