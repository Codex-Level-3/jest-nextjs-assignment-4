import ToggleText from "../ToggleText";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ToggleText", () => {
  test("text is not visible initially", () => {
    render(<ToggleText />);
    const notVisibleText = screen.queryByText("Yay, you can see me now!");
    expect(notVisibleText).toBeNull();
  });

  it("makes text visible when clicking the button", () => {
    render(<ToggleText />);
    const button = screen.getByText("Toggle Text");

    fireEvent.click(button);

    const visibleText = screen.getByText("Yay, you can see me now!");
    expect(visibleText).toBeInTheDocument();
  });
});
