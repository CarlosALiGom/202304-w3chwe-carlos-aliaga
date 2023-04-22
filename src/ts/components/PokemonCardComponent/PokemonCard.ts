import Component from "../Component/Component.js";
import { type ComponentStructure, type PokemonStructure } from "../types";

class PokemonCardComponent extends Component implements ComponentStructure {
  private pokemonData: PokemonStructure;

  constructor(parentElement: HTMLElement, public pokemonUrl: string) {
    super(parentElement, "li", "pokemon-card");
    (async () => this.getPokemon())();
  }

  async getPokemon(): Promise<void> {
    const response = await fetch(this.pokemonUrl);
    const pokemonData = (await response.json()) as PokemonStructure;

    this.pokemonData = pokemonData;
    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <div class="pokemon pokemon-container">
    <img class="pokemon__avatar" src="${this.pokemonData.sprites.other["official-artwork"].front_default}" alt="${this.pokemonData.name}" />
    <h3 class="pokemon__name">${this.pokemonData.name}</h3>
    <span class="pokemon__Id">#</span> ${this.pokemonData.id}
    <ul class="pokemon__data-list">
    `;
  }
}

export default PokemonCardComponent;
