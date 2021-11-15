import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import Header from "./../Components/Home/Header";
import MainTemp from "./../Components/Home/MainTemp";
import OtherTemp from "./../Components/Home/OtherTemp";

export default function Home({ navigation }) {
  return (
    <View style={{ paddingTop: 30 }}>
      <View
        style={{
          backgroundColor: "#4dbad8",
          paddingLeft: 30,
          borderBottomLeftRadius: 180,
        }}
      >
        <Header navigation={navigation} arrName="right" />

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <MainTemp />
        </View>
        <StatusBar backgroundColor="#4dbad8" style="light" />
      </View>
      <OtherTemp />
    </View>
  );
}
