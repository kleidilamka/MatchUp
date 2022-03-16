import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Home from "../screens/Home";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Match from "../screens/Match";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#283040",
        },
        headerStyle: {
          backgroundColor: "#151928",
        },
        tabBarActiveTintColor: "#fffffe",
        tabBarInactiveTintColor: "#fffffe",
        headerTintColor: "#9a9a9a",
        headerTitle: "Feed",
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="TabOne" component={TabOneScreen} />
      <Tab.Screen
        name="Match"
        component={Match}
        options={{
          tabBarIcon: () => {
            return (
              <LinearGradient
                colors={["#8e44ad", "#f4376d", "#f4376d"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.matchButton}
              >
                <AntDesign name="heart" size={25} color={"white"} />
              </LinearGradient>
            );
          },
        }}
      />
      <Tab.Screen name="Tao" component={TabOneScreen} />
      <Tab.Screen name="TabTwo" component={TabTwoScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  matchButton: {
    top: -15,
    backgroundColor: "#f4376d",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default BottomTab;
