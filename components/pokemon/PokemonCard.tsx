import { Text, Pressable, Image } from "react-native";
import {
  getPaddedPokemonId,
  getPokemonImage,
  resolvePokemonName,
} from "../../lib/utils";
import { Pokemon } from "../../lib/types";
import colors from "../../lib/colors";
import { useRouter } from "expo-router";

const PokemonCard = ({ name, id, types }: Pokemon) => {
  const router = useRouter();
  const pokemonImage = getPokemonImage(id);
  const pokemonId = getPaddedPokemonId(id);
  const pokemonName = resolvePokemonName(name);
  const colorByType = types[0].type.name;

  const handleOnpress = () => {
    router.push(`/(drawer)/${id}`);
  };

  return (
    <Pressable
      className={`relative mx-1 flex h-40 w-[30vw] flex-col items-center overflow-hidden rounded-xl border-2`}
      style={{ borderColor: colors[colorByType] }}
      onPress={handleOnpress}
    >
      <Image
        source={{ uri: pokemonImage }}
        alt={pokemonName}
        className="top-2 w-28 flex-1"
        style={{ resizeMode: "cover" }}
      />
      <Text
        className="absolute right-2 top-1 font-semibold"
        style={{ color: colors[colorByType] }}
      >
        #{pokemonId}
      </Text>
      <Text
        className="w-full py-1 text-center text-base capitalize text-white"
        style={{ backgroundColor: colors[colorByType] }}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default PokemonCard;
