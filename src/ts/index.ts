import AppComponent from "./components/AppComponent/AppComponent.js";
import { type PokemonStructure } from "./components/types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (): Promise<PokemonStructure> => {
  const response = await fetch(`${apiUrl}1`);
  const pokemon = (await response.json()) as PokemonStructure;
  return pokemon;
};

await getPokemons();

const divContainer: HTMLElement = document.querySelector(".root")!;
new AppComponent(divContainer);
