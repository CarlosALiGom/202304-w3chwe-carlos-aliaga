export interface ComponentStructure {
  element: HTMLElement;
  renderHtml: () => void;
  addListeners?: () => void;
}
