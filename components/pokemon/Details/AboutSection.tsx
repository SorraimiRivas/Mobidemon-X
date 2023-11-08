import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import VerticalDivider from "components/common/VerticalDivider";

type Props = {
  abilities: Array<Abilities>;
  description: string;
  weight: number | null;
  height: number | null;
  color: string;
};

type Abilities = {
  ability: {
    name: string;
  };
};

const AboutSection = ({
  abilities,
  description,
  weight,
  height,
  color,
}: Props) => {
  return (
    <View className="flex flex-col items-center">
      <Text className="mt-6 text-2xl font-bold" style={{ color: color }}>
        About
      </Text>
      <View className="mt-4 flex w-full flex-row items-center justify-evenly ">
        {/* Weight */}
        <View className="flex flex-1 flex-col items-center justify-between gap-2">
          <View className="mr-2 flex flex-row items-center">
            <Image
              source={require("@/assets/svgs/scale.svg")}
              className="mr-1 h-8 w-8"
            />
            <Text className="ml-1 text-lg">{weight} kg</Text>
          </View>
          <Text className="text-lg text-gray-700">Weight</Text>
        </View>
        <VerticalDivider />

        {/* height */}
        <View className="flex flex-1 flex-col items-center justify-between gap-2">
          <View className="mr-2 flex flex-row items-center">
            <Image
              source={require("@/assets/svgs/ruler.svg")}
              className="mr-1 h-8 w-4"
            />
            <Text className="ml-1 text-lg">{height} m</Text>
          </View>
          <Text className="text-lg text-gray-700">Height</Text>
        </View>
        <VerticalDivider />
        {/* Abilities */}
        <View className="flex flex-1 flex-col justify-between">
          {abilities.map((item) => (
            <View key={item.ability.name}>
              <Text className="text-center text-lg capitalize">
                {item.ability.name}
              </Text>
            </View>
          ))}
          <Text className="pb-5 text-center text-lg text-gray-700">Moves</Text>
        </View>
      </View>
      <View className="w-full px-8">
        <Text className="text-base">{description}</Text>
      </View>
    </View>
  );
};

export default AboutSection;
