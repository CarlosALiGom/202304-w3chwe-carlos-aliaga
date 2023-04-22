import { type PokemonStructure } from "./components/types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (): Promise<PokemonStructure> => {
  const response = await fetch(`${apiUrl}1`);
  return (await response.json()) as PokemonStructure;
};

await getPokemons();
