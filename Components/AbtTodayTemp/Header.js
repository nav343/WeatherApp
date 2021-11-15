import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Header({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#fff",
            marginTop: -10,
          }}
        >
          Tokyo, Jpn
        </Text>
        <Text style={{ color: "#fff", opacity: 0.6, fontSize: 18 }}>
          Friday, June 21
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#71c8df",
          borderBottomLeftRadius: 20,
          position: "absolute",
          top: -10,
          right: -5,
          width: 70,
          height: 70,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/ffffff/long-arrow-left.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
