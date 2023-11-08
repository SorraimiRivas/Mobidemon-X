import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import {
  convertDecimetersToMeters,
  convertHectogramsToKilograms,
  getColorByType,
  getFullSizePokemonImage,
  getPaddedPokemonId,
} from "lib/utils";
import { Image } from "expo-image";
import { POKEMON_DETAILS } from "queries";
import AboutSection from "components/pokemon/Details/AboutSection";
import { Types } from "lib/types";
import BaseStatsSection from "components/pokemon/Details/BaseStatsSection";

const PokemonDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data, loading, error } = useQuery(POKEMON_DETAILS, {
    variables: {
      id,
    },
  });

  const colorByType = getColorByType(data?.pokemon?.types[0].type.name) || null;
  const pokeImage: string = getFullSizePokemonImage(Number(id));
  const nextId: number = Number(id) + 1;
  const prevId: number = Number(id) - 1;
  const description: string = data?.description?.[0]?.flavor_text;
  const weight: number | null = convertHectogramsToKilograms(
    data?.pokemon.weight,
  );
  const height: number | null = convertDecimetersToMeters(data?.pokemon.height);
  const abilities = data?.pokemon?.abilities;
  const types: Types[] = data?.pokemon?.types;

  const paddedId = getPaddedPokemonId(Number(id));

  return loading ? (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={50} />
    </View>
  ) : (
    // Colored Card
    <View
      className={"relative m-2 flex-1 rounded-2xl"}
      // @ts-ignore
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: colorByType,
      }}
    >
      <View className="mx-6 mt-10 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          <Pressable onPress={() => router.replace("/(drawer)")}>
            <MaterialIcons name="arrow-back" size={35} color="white" />
          </Pressable>
          <Text className="text-3xl font-bold capitalize text-white">
            {data.pokemon.name}
          </Text>
        </View>
        <Text className="text-base font-bold text-white">#{paddedId}</Text>
      </View>
      <Image
        source={require("@/assets/svgs/big_pokeball.svg")}
        className="absolute right-2 top-2 h-[300] w-[300]"
      />
      <View className="relative top-20 flex flex-row items-center justify-around">
        <Pressable
          onPress={() => router.push(`/(drawer)/${prevId}`)}
          disabled={Number(id) === 1}
        >
          <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
        </Pressable>
        <Image
          source={{ uri: pokeImage }}
          className="z-50 h-80 w-80"
          contentFit="contain"
          transition={{
            duration: 1600,
            effect: "cross-dissolve",
          }}
        />
        <Pressable onPress={() => router.push(`/(drawer)/${nextId}`)}>
          <MaterialIcons name="keyboard-arrow-right" size={40} color="white" />
        </Pressable>
      </View>
      {/* Info Card */}
      <View className="-z-50 m-2 flex-1 rounded-lg bg-white ">
        <View className="flex flex-row justify-center gap-10 pt-16">
          {types.map((item) => (
            <View key={item.type.name} className="">
              <Text
                className="rounded-full px-4 pb-1 text-lg font-bold capitalize text-white"
                style={{
                  // @ts-ignore
                  backgroundColor: `${getColorByType(item.type.name)}`,
                }}
              >
                {item.type.name}
              </Text>
            </View>
          ))}
        </View>
        {/* About */}
        <AboutSection
          abilities={abilities}
          // @ts-ignore
          color={colorByType}
          description={description}
          height={height}
          weight={weight}
        />
        {/* Base Stats */}

        <BaseStatsSection
          stats={data?.pokemon?.stats}
          //@ts-ignore
          color={colorByType}
        />
      </View>
    </View>
  );
};

export default PokemonDetails;
