import PokeDetailsCardComponent from "./components/Component/PokeDetailsCardComponent/pokeDetailsCardComponent.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/150";

const appContainer: HTMLElement = document.querySelector(".root")!;
new PokeDetailsCardComponent(appContainer, apiUrl);
