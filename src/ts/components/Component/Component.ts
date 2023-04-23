import { type ComponentStructure } from "../types";
abstract class Component implements ComponentStructure {
  element: HTMLElement;

  constructor(parentElement: HTMLElement, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }

  abstract renderHtml(): void;
}

export default Component;
