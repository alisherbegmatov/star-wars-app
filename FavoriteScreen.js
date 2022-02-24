import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteHome from "./components/FavoriteHome";
import DetailsScreen from "./components/DetailsScreen";

function FavoriteScreen() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="FavoriteHome"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#FFE81F",
          headerTitleStyle: {
            fontWeight: "300",
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="FavoriteHome" component={FavoriteHome} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
});
