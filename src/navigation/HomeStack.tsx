import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#151928",
        },
        headerTintColor: "#9a9a9a",
        headerTitle: "Feed",
        headerLeft: () => {
          return (
            <MaterialCommunityIcons
              style={{ transform: [{ rotate: "180deg" }] }}
              name="send"
              size={25}
              color="#9a9a9a"
            />
          );
        },
        headerRight: () => {
          return <AntDesign name="camera" size={25} color={"#9a9a9a"} />;
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
