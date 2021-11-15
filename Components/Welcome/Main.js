import React from "react";
import { View, Text, Image } from "react-native";

export default function Main() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/004/057/263/large_2x/businessman-with-umbrella-flat-color-faceless-character-caucasian-man-standing-with-cup-of-coffee-executive-holding-mug-white-guy-in-suit-and-tie-gentleman-isolated-cartoon-illustration-vector.jpg",
        }}
        style={{ width: 450, height: 450, marginTop: 30 }}
      />

      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Tokyo, Jpn</Text>
      <Text style={{ opacity: 0.6, fontSize: 20 }}>Friday, June 21</Text>
    </View>
  );
}
