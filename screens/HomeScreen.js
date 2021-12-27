import React, { Component } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

const profPic = require("../assets/profPic.jpg");

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.header}>Edit Profile</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={profPic} />
        </View>

        <View style={styles.infoContainer}>
          <Text>Name</Text>
          <Text>Phone</Text>
          <Text>Email</Text>
          <Text>Tell us about yourself</Text>
        </View>
        <StatusBar barStyle="dark-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  titleContainer: {
    flex: 0.25,
    justifyContent: "center",
    backgroundColor: "aliceblue",
  },
  header: {
    textAlign: "center",
    color: "#446DDE",
    fontSize: 26,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "purple",
  },
  image: {
    flex: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 3,
    backgroundColor: "green",
    textAlign: "left",
  },
});
