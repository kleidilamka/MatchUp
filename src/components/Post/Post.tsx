import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Pic from "../../assets/images/profile.jpeg";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import postsData from "../../assets/data/posts";

const Post = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  const [post, setPost] = useState();
  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    setPost(postsData[1].postPics);
    setProfilePic(postsData[0].profilePic);
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <Image style={styles.profilePic} source={{ uri: profilePic }} />
        <View style={styles.topLeftContainer}>
          <Text style={[styles.text, { fontFamily: "Roboto_400Regular" }]}>
            Mia
          </Text>
          <Text style={[styles.text, { fontFamily: "Roboto_400Regular" }]}>
            2 October 2024
          </Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <FlatList
          data={post}
          horizontal
          renderItem={({ item }) => (
            <Image style={styles.postPics} source={{ uri: item }} />
          )}
        />
        <Text
          style={{
            color: "#fcfcfc",
            fontSize: 18,
            marginLeft: 20,
            marginTop: 10,
            fontFamily: "Roboto_400Regular",
          }}
        >
          Best description ever!!
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftContainer}>
          <AntDesign
            style={styles.icons}
            name="heart"
            size={24}
            color="#f4376d"
          />
          <Text
            style={{
              fontSize: 16,
              color: "#f4376d",
              fontFamily: "Roboto_400Regular",
            }}
          >
            243
          </Text>
          <MaterialCommunityIcons
            style={styles.icons}
            name="comment-text-outline"
            size={24}
            color="white"
          />
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontFamily: "Roboto_400Regular",
            }}
          >
            78
          </Text>
        </View>

        <Pressable style={{ marginRight: 10 }}>
          <MaterialCommunityIcons name="send-outline" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Post;
