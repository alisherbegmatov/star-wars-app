import React from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";

function DetailsScreen({ navigation, route }) {
  const { favorite } = route.params;
  const { name, height, mass, hair_color, eye_color, homeworld, films } =
    favorite.item;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://pbs.twimg.com/media/EVvJpmgU8AAEq2q?format=jpg&name=large",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.feature}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>Eye Color: {eye_color}</Text>
          <Text style={styles.text}>Hair Color: {hair_color}</Text>
          <Text style={styles.text}>Height: {height}</Text>
          <Text style={styles.text}>Mass: {mass}</Text>
          <Text style={styles.text}>Home World: {homeworld}</Text>
          <Text style={styles.text}>Films: {films.join()}</Text>
        </View>
        <Button
          color={"#FFE81F"}
          title="Back"
          onPress={() => navigation.navigate("FavoriteHome")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  feature: {
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

export default DetailsScreen;
