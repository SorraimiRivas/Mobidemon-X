export type Pokemon = {
  __typename: string;
  name: string;
  id: number;
  types: Types[];
};

export type PokemonList = {
  pokemon: Array<Pokemon>;
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  description: Description[];
  stats: Stats[];
  abilities: Abilities[];
  types: Types[];
};

export type Stat = {
  name: string;
};

export type Stats = {
  base_stat: number;
  stat: Stat;
};

export type Types = {
  type: Type;
};

export type Type = {
  name: string;
};

export type Abilities = {
  ability: Array<Ability>;
};

export type Ability = {
  name: string;
};

export type Description = {
  __typename: string;
  flavor_text: string;
};

export type ColorType = {
  gray: {
    400: string;
    700: string;
    900: string;
  };
  fairy: string;
  ice: string;
  grass: string;
  steel: string;
  rock: string;
  dark: string;
  psychic: string;
  water: string;
  ghost: string;
  ground: string;
  dragon: string;
  electric: string;
  fire: string;
  bug: string;
  poison: string;
  flying: string;
  fighting: string;
  normal: string;
};
