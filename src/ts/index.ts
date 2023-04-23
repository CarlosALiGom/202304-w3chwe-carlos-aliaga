import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonListComponent from "./components/PokemonListComponent/PokemonListComponent.js";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";

const divContainer: HTMLElement = document.querySelector(".root")!;

new AppComponent(divContainer);

const appContainer: HTMLElement = document.querySelector(".app-container")!;
new PokemonListComponent(appContainer);

new ButtonComponent(divContainer, "button-previous", "Previous");
new ButtonComponent(divContainer, "button-next", "Next");
