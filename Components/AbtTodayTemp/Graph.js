import React from "react";
import { View, Text, Image } from "react-native";
import graphData from "./GraphData";

export default function Graph() {
  return (
    <View style={{ marginBottom: 20 }}>
      <GraphImage />
      <GraphTxt />
    </View>
  );
}

const GraphImage = () => (
  <>
    <Image
      source={require("../../assets/graph.jpg")}
      style={{ resizeMode: "contain" }}
    />
  </>
);

const GraphTxt = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
      paddingHorizontal: 10,
      marginTop: 20,
    }}
  >
    {graphData.map((data, index) => (
      <View key={index} style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{data.day}</Text>
        <Text style={{ opacity: 0.6 }}>{data.temp}</Text>
      </View>
    ))}
  </View>
);
