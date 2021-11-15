import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./Screens/Home";
import Welcome from "./Screens/Welcome";
import AbtTodayTemp from "./Screens/AbtTodayTemp";

const Stack = createStackNavigator();

const headerOptions = {
  headerShown: false,
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={headerOptions}
      >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="AbtTodayTemp" component={AbtTodayTemp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
