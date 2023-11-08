import colors from "./colors";

export function getPokemonImage(id: number): string {
  const paddedId = getPaddedPokemonId(id);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
}

export function getPaddedPokemonId(id: number): string {
  return String(id).padStart(3, "0");
}

export function resolvePokemonName(name: string): string {
  return name.replace("-hero", "").replace("-single-strike", "");
}

export function getFullSizePokemonImage(id: number): string {
  const paddedId = getPaddedPokemonId(id);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
}

export const prettyPrint = (data: any) =>
  console.log(JSON.stringify(data, null, 2));

export const convertHectogramsToKilograms = (hectograms: number) => {
  return hectograms ? hectograms / 10 : null;
};

export const convertDecimetersToMeters = (decimeter: number) => {
  return decimeter ? decimeter / 10 : null;
};

export const getColorByType = (type: keyof typeof colors) => {
  return colors[type];
};

export const formatStats = (stat: string) => {
  switch (stat) {
    case "hp":
      return "HP";
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SATK";
    case "special-defense":
      return "SDEF";
    case "speed":
      return "SPD";
    default:
      return null;
  }
};
