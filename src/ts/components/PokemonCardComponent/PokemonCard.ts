import Component from "../Component/Component.js";
import { type ComponentStructure, type PokemonStructure } from "../types";

class PokemonCardComponent extends Component implements ComponentStructure {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemon: PokemonStructure
  ) {
    super(parentElement, "li", "pokemonCard");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <div class="pokemon pokemon-container">
    <img class="pokemon__avatar" src="${this.pokemon.sprites.other["official-artwork"].front_default}" alt="${this.pokemon.name}" />
    <h3 class="pokemon__name">${this.pokemon.name}</h3>
    <span class="pokemon__Id">#</span> ${this.pokemon.id}
    <ul class="pokemon__data-list">
    `;
  }
}

export default PokemonCardComponent;
