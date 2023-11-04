import { View, Text, FlatList } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ data }) => {
  const renderItem = ({ item }) => {
    return <PokemonCard {...item} />;
  };

  return (
    <View className="mt-4 flex-1 items-center">
      <FlatList
        data={data}
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
