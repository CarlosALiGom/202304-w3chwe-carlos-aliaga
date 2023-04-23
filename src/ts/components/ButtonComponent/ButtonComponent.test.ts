import ButtonComponent from "./ButtonComponent.js";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given a ButtonComponent component", () => {
  describe("When its instantiate with a text 'Next'", () => {
    test("Then it should create a button with the text 'Next' inside", () => {
      const text = "Next";

      new ButtonComponent(container, "button", "Next");
      const buttonTest = container.querySelector(".button")!;

      expect(buttonTest.textContent).toBe(text);
    });
  });
});
