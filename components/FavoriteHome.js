import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Cell from "./Cell";

function HomeScreen({ navigation }) {
  const form = useSelector((state) => state.StarWarsData);
  const { favorites } = form;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://pbs.twimg.com/media/EVvJpmgU8AAEq2q?format=jpg&name=large",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        {favorites.length > 0 ? (
          <FlatList
            style={styles.list}
            data={favorites}
            renderItem={(favorite) => {
              return (
                <Cell
                  title={favorite.item.name}
                  showDetails={() =>
                    navigation.navigate("Details", { favorite })
                  }
                />
              );
            }}
            keyExtractor={(favorite) => favorite.name}
          />
        ) : (
          <Text style={styles.title}>No Character Saved Yet!</Text>
        )}
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
  list: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 100,
    color: "#FFE81F",
  },
});
export default HomeScreen;
