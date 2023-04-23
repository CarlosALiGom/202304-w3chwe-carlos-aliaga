import PaginationComponent from "./PaginationComponent.js";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given an PaginationComponent Component", () => {
  describe("When it recieves a `parentElement`", () => {
    test("Then it should create a 'div'", () => {
      const divContainer = new PaginationComponent(container);

      expect(divContainer).toBeInstanceOf(PaginationComponent);
    });
  });

  describe("When it recieves a `parentElement`", () => {
    test("Then it should create a 'p' with the text '20/1000' inside", () => {
      const text = "20/1000";
      new PaginationComponent(container);

      const pText = container.querySelector("p");

      expect(pText?.textContent).toBe(text);
    });
  });
});
