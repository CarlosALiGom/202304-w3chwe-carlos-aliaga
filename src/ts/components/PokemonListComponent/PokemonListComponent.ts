import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCard.js";
import {
  type PokemonDataStructure,
  type PokemonUrlListStructure,
} from "../types";

class PokemonListComponent extends Component {
  pokemonUrls: PokemonUrlListStructure[];
  apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(parentElement: HTMLElement) {
    super(parentElement, "ul", "row row-cols-2 row-cols-md-4 g-4");
    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(this.apiUrl);
    const pokemonList = (await response.json()) as PokemonDataStructure;

    this.pokemonUrls = pokemonList.results;
    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemonUrls.forEach((pokemon) => {
      new PokemonCardComponent(this.element, pokemon.url);
    });
  }
}

export default PokemonListComponent;
