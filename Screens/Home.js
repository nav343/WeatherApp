import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import Header from "./../Components/Home/Header";
import MainTemp from "./../Components/Home/MainTemp";

export default function Home() {
  return (
    <View
      style={{
        backgroundColor: "#4dbad8",
        paddingLeft: 30,
      }}
    >
      <Header />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <MainTemp />
      </View>
      <StatusBar backgroundColor="#4dbad8" style="light" />
    </View>
  );
}
