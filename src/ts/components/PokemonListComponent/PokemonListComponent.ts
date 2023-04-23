import { off } from "process";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCard.js";
import {
  type PokemonDataStructure,
  type PokemonUrlListStructure,
} from "../types";

class PokemonListComponent extends Component {
  pokemonUrls: PokemonUrlListStructure[];
  offsetNumber = 0;

  constructor(parentElement: HTMLElement) {
    super(parentElement, "ul", "row row-cols-2 row-cols-md-4 g-4");

    (async () => this.getPokemons())();
    setTimeout(() => {
      this.registerEventListener();
    }, 1000);
  }

  async getPokemons(): Promise<void> {
    this.element.innerHTML = "";
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${this.offsetNumber}&limit=20`
    );
    const pokemonList = (await response.json()) as PokemonDataStructure;

    this.pokemonUrls = pokemonList.results;
    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemonUrls.forEach((pokemon) => {
      new PokemonCardComponent(this.element, pokemon.url);
    });
  }

  registerEventListener() {
    const nextButton = document.querySelector(".button-next");
    const previousButton = document.querySelector(".button-previous");
    const paginationNumber = document.querySelector(".pagination-number")!;

    previousButton?.addEventListener("click", async () => {
      if (!this.offsetNumber) {
        return;
      }

      this.offsetNumber -= 20;
      paginationNumber.textContent = `${this.offsetNumber + 20}/1010`;

      await this.getPokemons();
    });

    nextButton?.addEventListener("click", async () => {
      this.offsetNumber += 20;
      paginationNumber.textContent = `${this.offsetNumber + 20}/1010`;

      await this.getPokemons();
    });
  }
}

export default PokemonListComponent;
