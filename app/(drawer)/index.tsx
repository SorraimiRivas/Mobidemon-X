import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { POKEMON_LIST } from "../../queries";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../lib/colors";
import { MAX_POKEMON_ID } from "../../lib/constants";
import PokemonList from "../../components/pokemon/PokemonList";
import Constants from "expo-constants";
import { Image } from "expo-image";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

  const { data, loading, error } = useQuery(POKEMON_LIST, {
    variables: {
      maxPokemonId: MAX_POKEMON_ID,
      search: `%${search}%`,
      offset: 0,
      limit: 151,
    },
  });

  const handleFocus = (): void => setFocus((prev) => !prev);
  const handleBlur = (): void => setFocus((prev) => !prev);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return;
  }

  return (
    <SafeAreaView
      className="flex flex-1 flex-col bg-background"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <View className="mx-7 flex flex-row items-center justify-between py-4">
        <View className="flex flex-row">
          <Image
            source={require("../../assets/svgs/Pokeball.svg")}
            className="bg-red mr-4 h-8 w-8 rounded-full"
            contentFit="cover"
          />
          <Text className="text-3xl font-extrabold">Pokédex</Text>
        </View>
        <Image
          source={require("../../assets/svgs/Sort.svg")}
          className="h-8 w-8"
        />
      </View>
      <View className="relative">
        {!focus ? (
          <View
            className="absolute bottom-0 right-[40%] top-0 z-10 flex flex-row items-center pl-4 pr-4"
            pointerEvents="none"
          >
            <MaterialIcons name="search" size={25} color={colors.gray[700]} />
            <Text className="ml-2 text-xl text-gray-700">Search</Text>
          </View>
        ) : (
          <View
            className="absolute top-[6px] z-10 flex flex-row items-center pl-7 pr-4"
            pointerEvents="none"
          >
            <MaterialIcons name="search" size={25} color={colors.gray[700]} />
          </View>
        )}
        <TextInput
          onFocus={handleFocus}
          value={search}
          onBlur={handleBlur}
          onChangeText={(value) => setSearch(value)}
          className="mx-4 rounded-2xl border-2 border-gray-700/30 bg-white px-12 py-1 text-black"
        />
      </View>
      {data && <PokemonList data={data.pokemon} />}
    </SafeAreaView>
  );
};

export default Home;
