import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Post from "../../components/Post";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#151928" }}>
      <Post />
    </SafeAreaView>
  );
};

export default Home;
