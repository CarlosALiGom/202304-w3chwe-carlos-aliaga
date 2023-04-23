import Component from "../Component/Component.js";
import { type ComponentStructure, type PokemonStructure } from "../types";

class PokemonCardComponent extends Component implements ComponentStructure {
  private pokemonData: PokemonStructure;

  constructor(parentElement: HTMLElement, public pokemonUrl: string) {
    super(parentElement, "li", "col");
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
    <div class="card h-100">
      <img src="${this.pokemonData.sprites.other["official-artwork"].front_default}" class="card-img-top"  alt="${this.pokemonData.name}" />
      <div class="card-body">
        <h5 class="card-title">${this.pokemonData.name}</h5>
        <p class="card-text">#  ${this.pokemonData.id}</p>
      </div>
    </div>
    `;
  }
}

export default PokemonCardComponent;
