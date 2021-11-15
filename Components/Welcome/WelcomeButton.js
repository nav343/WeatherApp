import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function WelcomeButton({ navigation }) {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.push("HomeScreen")}
        style={{
          alignItems: "center",
          borderTopLeftRadius: 190,
          borderTopRightRadius: 190,
          backgroundColor: "#eeb907",
          width: "100%",
          height: "30%",
          position: "absolute",
          bottom: -160,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 30,
          }}
        >
          Today's Changes
        </Text>
      </TouchableOpacity>
    </>
  );
}
