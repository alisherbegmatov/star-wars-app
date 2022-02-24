import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setNumber, getPeople, saveFavorite } from "./actions";
import Result from "./components/Result";

function SearchScreen() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.StarWarsData);
  const { number, character, favorites } = form;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://pbs.twimg.com/media/EVvJpmgU8AAEq2q?format=jpg&name=large",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Star Wars Wikipedia</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(e) => {
              dispatch(setNumber(e));
            }}
            keyboardType="numeric"
            value={number.toString()}
          />
          <Button
            onPress={() => dispatch(getPeople(number))}
            title="Search"
            color="#FFE81F"
          />
        </View>
        {character.name ? <Result {...character} /> : null}
        {character.name ? (
          <Button
            onPress={() => dispatch(saveFavorite())}
            title="Save to Favorites"
            color="#FFE81F"
          />
        ) : null}
      </ImageBackground>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    paddingTop: 120,
  },

  form: {
    flexDirection: "row",
    margin: 20,
  },
  title: {
    fontSize: 30,
    margin: 20,
    color: "#FFE81F",
    fontWeight: "bold",
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderBottomColor: "#FFE81F",
    padding: 10,
    color: "#FFE81F",
    textAlign: "center",
    fontSize: 20,
  },
  result: {
    width: "90%",
    margin: 20,
    padding: 20,
    backgroundColor: "#FFE81F",
    borderRadius: 10,
  },
});
