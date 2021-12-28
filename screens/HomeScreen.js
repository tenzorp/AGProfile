import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const profPic = require("../assets/profPic.jpg");

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.header}>Edit Profile</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={profPic} />
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          width: 50,
          height: 50,
          borderRadius: 25,
          position: "absolute",
          top: 160,
          right: 125,
          alignItems: "center",
          justifyContent: "center",
          shadowOffset: { width: 2, height: 2 },
          shadowRadius: 3,
          shadowOpacity: 0.15,
        }}
      >
        <MaterialCommunityIcons name="pencil" size={26} color="#446DDE" />
      </View>

      <View style={styles.lowerContainer}>
        {infoComponent("Name", "Micah Smith", "EditName", navigation)}
        {infoComponent("Phone", "(208) 206-5039", "EditPhone", navigation)}
        {infoComponent(
          "Email",
          "micahsmith@gmail.com",
          "EditEmail",
          navigation
        )}
        {infoComponent(
          "Tell us about yourself",
          "Hi my name is Mica Smith. I am from Mesa but go to school in Salt Lake City. \nI make this drive all the time and have plenty",
          "EditAbout", navigation
        )}
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

/* probably could've used a flat list here... but tis too late */
function infoComponent(title, info, destination, nav) {
  if (title == "Tell us about yourself") {
    return (
      <TouchableWithoutFeedback onPress={() => nav.navigate(destination)}>
        <View style={styles.infoContainer2}>
          <View style={{ flexShrink: 1 }}>
            <Text style={styles.infoHeader}>{title}</Text>
            <Text numberOfLines={3} style={styles.infoText}>
              {info}
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <AntDesign
              name="right"
              size={24}
              color="#B3B3B3"
              style={{ padding: 10, flexBasis: 50 }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={() => nav.navigate(destination)}>
        <View style={styles.infoContainer}>
          <View style={{ flexShrink: 1 }}>
            <Text style={styles.infoHeader}>{title}</Text>
            <Text style={styles.infoText}>{info}</Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <AntDesign
              name="right"
              size={24}
              color="#B3B3B3"
              style={{ padding: 10, flexBasis: 50 }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingTop: 100,
  },
  titleContainer: {
    flex: 0.25,
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    color: "#446DDE",
    fontSize: 26,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    borderColor: "#446DDE",
    borderWidth: 6,
    margin: 10,
  },
  image: {
    flex: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
  lowerContainer: {
    flex: 3,
    textAlign: "left",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    height: 60,
  },
  infoContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    height: 100,
  },
  infoHeader: {
    fontSize: 14,
    color: "#B3B3B3",
    fontWeight: "bold",
    marginVertical: 7,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
