import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WelcomeMessage from "../WelcomeMessage";

describe("WelcomeMessage", () => {
  it("renders message correctly", () => {
    render(<WelcomeMessage message="Hello and Welcome!" />);
    const welcomeText = screen.getByText("Hello and Welcome!");
    expect(welcomeText).toBeInTheDocument();
  });
});
