import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import CustomSelect from "./CustomSelect"; // Adjust the import path as needed

test("CustomSelect renders and interacts correctly", async () => {
  // Define mock data for testing
  const title = "My Select";
  const list = [{ name: "Option 1" }, { name: "Option 2" }, { name: "Option 3" }];
  const value = list[0];
  const handleChange = jest.fn();

  // Render the CustomSelect component
  render(
    <CustomSelect title={title} list={list} value={value} handleChange={handleChange} />
  );

  // Access the select element by its data-testid
  const selectElement = screen.getByTestId("custom-select");
  fireEvent.click(selectElement);
  screen.debug()

  // Simulate a change event on the select element
  fireEvent.mouseDown(selectElement); // Open the dropdown

  await waitFor(() => screen.findByText("Option 2"));
  fireEvent.click("Option 2");
  

  // Verify that the handleChange function was called with the correct value
  expect(handleChange).toHaveBeenCalledWith(JSON.stringify(list[1]));

  // Additional assertions or interactions can be added based on your requirements
});
