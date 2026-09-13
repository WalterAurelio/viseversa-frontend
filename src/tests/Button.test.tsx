import { test, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  test("renders the button with the right text", () => {
    render(<Button>Soy un Botón</Button>);

    const myButton = screen.getByRole("button", { name: /botón/i });

    expect(myButton).toBeInTheDocument();
    expect(myButton).toHaveTextContent("Soy un Botón");
  });

  test("calls the onClick function when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    const { getByText } = render(<Button onClick={handleClick}>Soy un Botón</Button>);
    const myButton = getByText("Soy un Botón");

    await user.click(myButton);

    expect(myButton).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("when disabled, the button does not call the onClick function when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    const { getByText } = render(
      <Button onClick={handleClick} disabled>
        Soy un Botón
      </Button>
    );
    const myButton = getByText("Soy un Botón");

    await user.click(myButton);

    expect(myButton).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
