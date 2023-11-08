import { View, Text } from "react-native";
import React from "react";
import { ColorType, Stats } from "lib/types";
import { formatStats } from "lib/utils";

type Props = {
  stats: Stats[];
  color: ColorType;
};
const BaseStatsSection = ({ stats, color }: Props) => {
  return (
    <View className="mx-8 mt-4 flex flex-row">
      {/* Stats */}
      <View>
        {stats.map((item, index) => (
          <Text
            key={index}
            className="mr-4 text-right font-bold"
            //@ts-ignore
            style={{ color }}
          >
            {formatStats(item.stat.name)}
          </Text>
        ))}
      </View>
      {/* Stat Value */}
      <View>
        {stats.map((item, index) => (
          <Text key={index} className="ml-4">
            {item.base_stat.toString().padStart(3, "0")}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default BaseStatsSection;
