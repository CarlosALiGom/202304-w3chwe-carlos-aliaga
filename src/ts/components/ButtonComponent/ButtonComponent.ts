import Component from "../Component/Component";
import { type ButtonComponentStructure } from "../types";

class ButtonComponent extends Component implements ButtonComponentStructure {
  text: string;

  constructor(parentElement: HTMLElement, className: string, text: string) {
    super(parentElement, "button", className);

    this.text = text;
  }

  renderHtml(): void {
    this.element.textContent = this.text;
  }
}

export default ButtonComponent;
