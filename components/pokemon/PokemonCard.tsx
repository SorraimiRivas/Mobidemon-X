import { View, Text, Pressable, Image } from "react-native";
import {
  getPaddedPokemonId,
  getPokemonImage,
  resolvePokemonName,
} from "../../lib/utils";

const PokemonCard = ({ name, id }) => {
  const pokemonImage = getPokemonImage(id);
  const pokemonId = getPaddedPokemonId(id);
  const pokemonName = resolvePokemonName(name);

  console.log("Pokemon Name: ", pokemonName);

  return (
    <Pressable
      className={`relative mx-1 flex h-36 w-36 flex-col items-center overflow-hidden rounded-xl border-2 border-grass`}
      onPress={() => console.log("touched", name)}
    >
      <Image
        source={{ uri: pokemonImage }}
        alt={pokemonName}
        className="h-20 w-20 flex-1"
        style={{ resizeMode: "contain" }}
      />
      <Text className="absolute">#{pokemonId}</Text>
      <Text className="w-full bg-grass py-1 text-center text-base capitalize text-white">
        {name}
      </Text>
    </Pressable>
  );
};

export default PokemonCard;
