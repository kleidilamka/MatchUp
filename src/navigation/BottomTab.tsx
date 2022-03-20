import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import TabTwoScreen from "../screens/TabTwoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Match from "../screens/Match";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Icon, { Icons } from "../components/Icons/Icons";
import * as Animatable from "react-native-animatable";

const Tab = createBottomTabNavigator();

// const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeStack"
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "#283040",
//           borderTopColor: "#9a9a9a",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: () => {
//             return <AntDesign name="home" size={25} color={"white"} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Search}
//         options={{
//           headerShown: false,
//           tabBarIcon: () => {
//             return <AntDesign name="search1" size={25} color={"white"} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Match"
//         component={Match}
//         options={{
//           tabBarIcon: () => {
//             return (
//               <LinearGradient
//                 colors={["#8e44ad", "#f4376d", "#f4376d"]}
//                 start={{ x: 0, y: 1 }}
//                 end={{ x: 1, y: 0 }}
//                 style={styles.matchButton}
//               >
//                 <AntDesign name="heart" size={25} color={"white"} />
//               </LinearGradient>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           headerShown: false,
//           tabBarIcon: () => {
//             return <Feather name="bell" size={25} color={"white"} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           headerShown: false,
//           tabBarIcon: () => {
//             return <AntDesign name="profile" size={25} color={"white"} />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Feather,
    icon: "home",
    component: HomeStack,
  },
  {
    route: "Search",
    label: "Search",
    type: Icons.Feather,
    icon: "search",
    component: HomeStack,
  },
  {
    route: "Add",
    label: "Add",
    type: Icons.Feather,
    type2: Icons.AntDesign,
    icon: "heart",
    icon2: "heart",
    component: HomeStack,
  },
  {
    route: "Like",
    label: "Like",
    type: Icons.Feather,
    icon: "bell",
    component: HomeStack,
  },
  {
    route: "Account",
    label: "Account",
    type: Icons.AntDesign,
    icon: "profile",
    component: HomeStack,
  },
];

const animate1 = {
  0: { scale: 0.5, translateY: 0 },
  0.92: { translateY: -44 },
  1: { scale: 1.2, translateY: -15 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      // textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      // textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1500} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type2 === AntDesign && focused ? AntDesign : item.type}
            name={item.type2 === "heart" && focused ? "heart" : item.icon}
            color={"white"}
          />
        </View>
        {/* <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text> */}
      </Animatable.View>
    </TouchableOpacity>
  );
};

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    backgroundColor: "#283040",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "transparent",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4376d",
    borderRadius: 35,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
});

export default BottomTab;
