export interface ComponentStructure {
  element: HTMLElement;
  renderHtml: () => void;
  addListeners?: () => void;
}

export interface PokemonTypeNameStructure {
  name: string;
}

export interface PokemonTypeStructure {
  slot: number;
  type: PokemonTypeNameStructure;
}

export interface PokemonStructure {
  name: string;
  id: number;
  types: PokemonTypeStructure[];
  height: number;
  weight: number;
  Sprites: PokemonTypeStructure[];
}
