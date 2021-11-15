import React from "react";
import { View, Text, Image } from "react-native";
import otherTemp from "./OtherTempData";

export default function OtherTemp() {
  return (
    <>
      {otherTemp.map((temp, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ opacity: 0.6 }}>09:20</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{temp.place}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{temp.temp}℃</Text>

          <View
            style={{
              backgroundColor: "orange",
              marginVertical: 10,
              padding: 10,
              borderRadius: 100,
            }}
          >
            <Image
              source={{ uri: temp.iconUrl }}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
      ))}
    </>
  );
}
