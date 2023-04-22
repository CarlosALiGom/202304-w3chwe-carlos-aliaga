import Component from "../Component/Component.js";
class AppComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "div", "app");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `<header class="main-header">
      <img src="../../../../public/images/pokemon-logo.svg" alt="Pokemon Logo">
    </header>`;
  }
}

export default AppComponent;
