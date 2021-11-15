import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../Components/Welcome/Header";
import Main from "../Components/Welcome/Main";
import WelcomeButton from "../Components/Welcome/WelcomeButton";

export default function Welcome({ navigation }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Header />

      <Main />

      <WelcomeButton navigation={navigation} />
    </View>
  );
}
