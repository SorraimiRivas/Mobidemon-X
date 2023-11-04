import { View, Text } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { POKEMON_LIST } from "../../queries";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../lib/colors";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const { data, loading, error } = useQuery(POKEMON_LIST, {
    variables: { maxPokemonId: 1005, offset: 0, search: `%${search}%` },
  });

  // console.log(error);

  const handleFocus = (): void => setFocus(true);
  const handleBlur = (): void => setFocus(false);

  return (
    <View className="flex flex-1 flex-col bg-background">
      <View className="relative">
        {!focus && search.length === 0 ? (
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
      {/* <FlatList data={data} /> */}
    </View>
  );
};

export default Home;
