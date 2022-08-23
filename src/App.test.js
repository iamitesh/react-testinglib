import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
describe("should be able to type in inputs", () => {
  it("should be able to type email", () => {
    render(<App />);
    const emailInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    userEvent.type(emailInputElement, "amit@gmail.com");
    expect(emailInputElement.value).toBe("amit@gmail.com");
  });
  it("should be able to type password", () => {
    render(<App />);
    const passwordInputElement = screen.getByLabelText(/password/i);
    userEvent.type(passwordInputElement, "12345");
    expect(passwordInputElement.value).toBe("12345");
  });
});
