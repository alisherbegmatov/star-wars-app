import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://pbs.twimg.com/media/EVvJpmgU8AAEq2q?format=jpg&name=large",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG42.png",
            }}
          />
        </View>
        <Text style={styles.title}>
          Please enter any number between 1 to 83 in the Search
        </Text>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    margin: 20,
    color: "#FFE81F",
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
  },
});
