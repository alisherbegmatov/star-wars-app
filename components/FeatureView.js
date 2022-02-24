import React from "react";
import { View, Text } from "react-native";

function FeatureView({ name }) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ color: "#FFE81F" }}>{name}</Text>
    </View>
  );
}

export default FeatureView;
