import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AboutScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <AntDesign
          style={{ left: -5 }}
          name="arrowleft"
          size={26}
          color="black"
        />
      </TouchableWithoutFeedback>

      <Text style={styles.header}>What type of passenger are you?</Text>

      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            numberOfLines={6}
            onChangeText={onChangeText}
            value={text}
            style={styles.input}
            placeholder="Write a little about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc."
          />
        </View>
      </View>

      <TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>Update</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.divider}></View>

      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  header: {
    flex: 0.75,
    top: 50,
    fontSize: 26,
    fontWeight: "bold",
  },
  inputSection: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    height: 170,
    borderColor: "#E9E9E9",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 150,
    borderColor: "transparent",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "center",
    height: 60,
    backgroundColor: "#000",
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
  button: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    flex: 2,
  },
});
