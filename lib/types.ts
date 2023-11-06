export type Pokemon = {
  name: string;
  id: number;
  types: Types[];
};

export type Types = {
  type: Type;
};

export type Type = {
  name: string;
};
