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

export default function HomeScreen({ navigation, route }) {
  const [names, setName] = React.useState("Micah Thomas");
  const [phone, setPhone] = React.useState("(208) 206-5039");
  const [email, setEmail] = React.useState("micahsmith@gmail.com");
  const [about, setAbout] = React.useState(
    "Hi my name is Mica Smith. I am from Mesa but go to school in Salt Lake City. \nI make this drive all the time and have plenty of room."
  );

  React.useEffect(() => {
    if (route.params?.name) {
      setName(route.params.name);
    }
    if (route.params?.phone) {
      setPhone(route.params.phone);
    }
    if (route.params?.email) {
      setEmail(route.params.email);
    }
    if (route.params?.about) {
      setAbout(route.params.about);
    }
  });

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
        {infoComponent("Name", names, "EditName", navigation, [names, phone, email, about])}
        {infoComponent("Phone", phone, "EditPhone", navigation, [names, phone, email, about])}
        {infoComponent("Email", email, "EditEmail", navigation, [names, phone, email, about])}
        {infoComponent("Tell us about yourself", about, "EditAbout", navigation, [names, phone, email, about])}
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

/* probably could've used a flat list here instead... but tis too late */
function infoComponent(title, info, destination, nav, state) {
  return (
    <TouchableWithoutFeedback
      onPress={() => nav.navigate(destination, { info: state })}
    >
      <View
        style={
          title == "Tell us about yourself"
            ? styles.infoContainer2
            : styles.infoContainer
        }
      >
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
    overflow: "hidden",
    width: 200,
    height: 200,
    borderRadius: 100,
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
  /* larger section for about */
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
