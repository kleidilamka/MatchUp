import { View, Text } from "react-native";
import React from "react";
import Home from "../screens/Home";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#283040",
        },
        tabBarActiveTintColor: "#fffffe",
        tabBarInactiveTintColor: "#fffffe",
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="TabOne" component={TabOneScreen} />
      <Tab.Screen name="TabTwo" component={TabTwoScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
