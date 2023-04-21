abstract class Component {
  element: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    className: string,
    tagName: string
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;

    this.parentElement.appendChild(this.element);
  }

  abstract renderHtml(): void;
}

export default Component;
