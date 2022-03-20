import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Post from "../../components/Post";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#151928" }}>
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

export default Home;
