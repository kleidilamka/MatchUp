import { StyleSheet, Dimensions } from "react-native";

var { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  root: {
    width: width,
    flexDirection: "column",
    marginBottom: 30,
  },
  topContainer: {
    flexDirection: "row",
  },
  profilePic: {
    height: 60,
    width: 60,
    borderRadius: 60,
    margin: 10,
  },
  topLeftContainer: {
    justifyContent: "center",
  },
  middleContainer: {},
  postPics: {
    height: 200,
    width: 200,
    borderRadius: 12,
    marginHorizontal: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "red",
  },
  bottomLeftContainer: {
    flexDirection: "row",
  },
  icons: {
    marginHorizontal: 10,
  },
  button: {
    position: "absolute",
    top: 20,
  },
  text: {
    fontSize: 14,
    color: "#f5f5f5",
  },
});
