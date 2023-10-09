import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
