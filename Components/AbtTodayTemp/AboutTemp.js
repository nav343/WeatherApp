import React from "react";
import { View, Text } from "react-native";

export default function AboutTemp() {
  return (
    <View style={{ marginTop: 30, marginHorizontal: 40 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 8,
        }}
      >
        <Text style={{ opacity: 0.7, fontSize: 17 }}>Precipitation</Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>0%</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 8,
        }}
      >
        <Text style={{ opacity: 0.7, fontSize: 17 }}>Humidity</Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>63%</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 8,
        }}
      >
        <Text style={{ opacity: 0.7, fontSize: 17 }}>Wind</Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>18 km/h</Text>
      </View>
    </View>
  );
}
