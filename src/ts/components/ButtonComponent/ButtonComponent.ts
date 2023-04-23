import Component from "../Component/Component.js";
import { type ButtonComponentStructure } from "../types";

class ButtonComponent extends Component implements ButtonComponentStructure {
  text: string;

  constructor(parentElement: HTMLElement, className: string, text: string) {
    super(parentElement, "button", className);

    this.text = text;
    this.renderHtml();
  }

  renderHtml(): void {
    this.element.textContent = this.text;
  }
}

export default ButtonComponent;
