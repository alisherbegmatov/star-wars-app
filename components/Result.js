import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

function Result({ name, eye_color, hair_color, height, mass }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Eye Color: {eye_color}</Text>
      <Text style={styles.text}>Hair Color: {hair_color}</Text>
      <Text style={styles.text}>Height: {height}</Text>
      <Text style={styles.text}>Mass: {mass}</Text>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 20,
    marginVertical: 40,
    borderWidth: 1,
    borderColor: "#FFE81F",
    borderRadius: 10,
    display: "flex",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 10,
    color: "#FFE81F",
  },
  text: {
    fontSize: 18,
    color: "#FFE81F",
    marginHorizontal: 20,
  },
});
