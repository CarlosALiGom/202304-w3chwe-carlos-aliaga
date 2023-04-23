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
      <img src="${this.pokemonData.sprites.other["official-artwork"].front_default}" class="card-img-top zoom zoom:hover"  alt="${this.pokemonData.name}" />
      <div class="card-body">
        <h2 class="card-title">${this.pokemonData.name}</h2>
        <p class="card-text">#  ${this.pokemonData.id}</p>
        <a href="" class="card-icon zoom zoom:hoover"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg></a>
      </div>
    </div>
    `;
  }
}

export default PokemonCardComponent;
