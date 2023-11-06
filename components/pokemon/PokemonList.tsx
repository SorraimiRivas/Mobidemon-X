import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ data }) => {
  const { width } = useWindowDimensions();

  const renderItem = ({ item }) => {
    return <PokemonCard {...item} />;
  };

  return (
    <View className={`w-[${width}] mt-6  flex-1 items-center`}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Nothing to show here</Text>}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={{
          gap: 10,
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PokemonList;
