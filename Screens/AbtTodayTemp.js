import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../Components/AbtTodayTemp/Header";
import MainTemp from "./../Components/Home/MainTemp";
import { StatusBar } from "expo-status-bar";
import AboutTemp from "./../Components/AbtTodayTemp/AboutTemp";
import Graph from "./../Components/AbtTodayTemp/Graph";

export default function AbtTodayTemp({ navigation }) {
  return (
    <ScrollView style={{ paddingTop: 30 }} showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: "#4dbad8",
          paddingLeft: 30,
          borderBottomLeftRadius: 180,
        }}
      >
        <Header navigation={navigation} />

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <MainTemp />
        </View>
        <StatusBar backgroundColor="#4dbad8" style="light" />
      </View>
      <AboutTemp />
      <Graph />
    </ScrollView>
  );
}
