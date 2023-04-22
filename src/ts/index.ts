import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonCardComponent from "./components/PokemonCardComponent/PokemonCard.js";
import PokemonListComponent from "./components/PokemonListComponent/PokemonListComponent.js";
import { type PokemonStructure } from "./components/types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const divContainer: HTMLElement = document.querySelector(".root")!;

new AppComponent(divContainer);
new PokemonListComponent(divContainer);
