import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders the header with the correct title", () => {
    render(<Header />);

    const title = screen.getByText("PeerCode");
    expect(title).toBeInTheDocument();
  });

  it("navigates to 'dashboard' on title click", () => {
    render(<Header />);

    const title = screen.getByText("PeerCode");
    fireEvent.click(title);

    // Assuming you have a navigation function, check if it's called with the correct argument
    // Update this part based on your actual navigation logic
    expect(mockNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("opens navigation menu on menu icon click", () => {
    render(<Header />);

    const menuIcon = screen.getByLabelText("account of current user");
    fireEvent.click(menuIcon);

    // Assuming you have a state or context to track the menu state
    // Check if the menu is open
    const navMenu = screen.getByTestId("nav-menu");
    expect(navMenu).toBeInTheDocument();
  });

  it("closes navigation menu on menu item click", () => {
    render(<Header />);

    const menuIcon = screen.getByLabelText("account of current user");
    fireEvent.click(menuIcon);

    const navMenuItem = screen.getByText("Some Menu Item"); // Replace with your actual menu item text
    fireEvent.click(navMenuItem);

    // Assuming you have a state or context to track the menu state
    // Check if the menu is closed
    const navMenu = screen.queryByTestId("nav-menu");
    expect(navMenu).not.toBeInTheDocument();
  });

  it("opens user menu on user avatar click", () => {
    render(<Header />);

    const userAvatar = screen.getByAltText("Remy Sharp");
    fireEvent.click(userAvatar);

    // Assuming you have a state or context to track the user menu state
    // Check if the user menu is open
    const userMenu = screen.getByTestId("user-menu");
    expect(userMenu).toBeInTheDocument();
  });

  it("logs out on 'Logout' menu item click", async () => {
    // Mocking the log_out function
    jest.mock("../../contexts/FirebaseContext", () => ({
      ...jest.requireActual("../../contexts/FirebaseContext"),
      log_out: jest.fn().mockResolvedValue(),
    }));

    render(<Header />);

    const userAvatar = screen.getByAltText("Remy Sharp");
    fireEvent.click(userAvatar);

    const logoutMenuItem = screen.getByText("Logout");
    fireEvent.click(logoutMenuItem);

    // Assuming you have a function to handle logout
    // Check if it's called
    await waitFor(() => expect(mockLogout).toHaveBeenCalled());
  });

});
