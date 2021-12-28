import React from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen.js";
import NameScreen from "./screens/NameScreen.js";
import PhoneScreen from "./screens/PhoneScreen.js";
import EmailScreen from "./screens/EmailScreen.js";
import AboutScreen from "./screens/AboutScreen.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }} /* could not figure out how to make header icons blue, sorry! */
      >
        <Stack.Screen name="Profile" component={HomeScreen} />
        <Stack.Screen name="EditName" component={NameScreen} />
        <Stack.Screen name="EditPhone" component={PhoneScreen} />
        <Stack.Screen name="EditEmail" component={EmailScreen} />
        <Stack.Screen name="EditAbout" component={AboutScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
