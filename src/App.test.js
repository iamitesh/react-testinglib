import { render, screen } from "@testing-library/react";
import App from "./App";
describe("check initial value of inputs", () => {
  it("email input shoulld be initially empty", () => {
    render(<App />);
    const emailInputElement = screen.getByRole("textbox");
    console.log(emailInputElement);
    expect(emailInputElement.value).toBe("");
  });
  it("password input shoulld be initially empty", () => {
    render(<App />);
    const passwordInputElement = screen.getByLabelText(/password/i);
    console.log(passwordInputElement);
    expect(passwordInputElement.value).toBe("");
  });
});
