import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Post from "../components/Post";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Post />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283040",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
