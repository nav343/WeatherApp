import React from "react";
import { View, Text, Image } from "react-native";

export default function MainTemp() {
  return (
    <View>
      <AbtMainTemp />
      <SubAbtTemp />
    </View>
  );
}

const AbtMainTemp = () => (
  <>
    <Text style={{ fontSize: 80, color: "#fff" }}>19℃</Text>
    <Text
      style={{
        marginTop: -20,
        marginLeft: 20,
        fontSize: 20,
        color: "white",
        opacity: 0.6,
      }}
    >
      mostly rainy
    </Text>

    <View
      style={{
        padding: 20,
        backgroundColor: "#70cae5",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        position: "absolute",
        left: -55,
      }}
    >
      <Image
        source={{ uri: "https://img.icons8.com/ios/50/ffffff/rain.png" }}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </View>
  </>
);

const SubAbtTemp = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 30,
      marginBottom: 60,
    }}
  >
    <View
      style={{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 100,
        marginRight: 10,
      }}
    >
      <Image
        source={{ uri: "https://img.icons8.com/ios/50/000000/cloud.png" }}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </View>
    <Text style={{ color: "#fff", fontSize: 17 }}>09:30</Text>

    <View
      style={{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 100,
        marginRight: 10,
        marginLeft: 20,
      }}
    >
      <Image
        source={{ uri: "https://img.icons8.com/ios/50/000000/cloud.png" }}
        style={{ width: 30, height: 30 }}
      />
    </View>
    <Text style={{ color: "#fff", fontSize: 17 }}>12:30</Text>
  </View>
);
