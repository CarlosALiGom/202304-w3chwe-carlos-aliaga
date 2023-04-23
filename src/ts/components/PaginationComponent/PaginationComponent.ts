import Component from "../Component/Component.js";

class PaginationComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "div", "pagination");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `<p class="pagination-number">20/1000</p>`;
  }
}

export default PaginationComponent;
