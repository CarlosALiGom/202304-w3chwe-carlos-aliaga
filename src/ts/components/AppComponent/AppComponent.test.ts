import AppComponent from "./AppComponent.js";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given an AppCOmponent Component", () => {
  describe("When it recieves a `parentElement`", () => {
    test("Then it should create a 'div'", () => {
      const divContainer = new AppComponent(container);

      expect(divContainer).toBeInstanceOf(AppComponent);
    });
  });
});
