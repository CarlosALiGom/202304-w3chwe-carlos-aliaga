import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonCardComponent from "./components/PokemonCardComponent/PokemonCard.js";
import { type PokemonStructure } from "./components/types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const divContainer: HTMLElement = document.querySelector(".root")!;

new AppComponent(divContainer);

const getPokemons = async (): Promise<PokemonStructure> => {
  const response = await fetch(`${apiUrl}1`);
  const pokemon = (await response.json()) as PokemonStructure;
  new PokemonCardComponent(divContainer, pokemon);
  return pokemon;
};

await getPokemons();
