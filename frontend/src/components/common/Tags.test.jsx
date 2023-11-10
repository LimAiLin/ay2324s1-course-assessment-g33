import React from "react";
import { render, screen } from "@testing-library/react";
import Tags from "./Tags";
import { toHaveStyle } from '@testing-library/jest-dom';

describe("Tags Component", () => {
  it("should render a list of tags with correct labels", () => {
    const tags = [
      { name: "Tag1" },
      { name: "Tag2" },
      { name: "Tag3" },
    ];

    render(<Tags tags={tags} />);

    // Assert that each tag is rendered with the correct label
    tags.forEach((tag) => {
      const tagElement = screen.getByText(tag.name);
      expect(tagElement).toBeInTheDocument();
    });
  });

  it("should render no tags when the input tag array is empty", () => {
    const tags = [];

    render(<Tags tags={tags} />);

    // Assert that no tags are rendered
    const tagElements = screen.queryAllByRole("listitem");
    expect(tagElements).toHaveLength(0);
  });

  it("should render tags with the correct styles", () => {
    const tags = [
      { name: "Tag1" },
      { name: "Tag2" },
      { name: "Tag3" },
    ];

    render(<Tags tags={tags} />);

    // Assert that each tag has the correct CSS style
    tags.forEach((tag) => {
      const tagElement = screen.getByText(tag.name);
      expect(tagElement).toHaveStyle("ml: 1");
      expect(tagElement).toHaveStyle("color: primary.contrastText");
    });
  });
});
