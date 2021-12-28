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

export default function EmailScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState(null);

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

      <Text style={styles.header}>What's your email?</Text>

      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Your email address</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="micahsmith@gmail.com"
            textContentType="emailAddress"
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
    height: 75,
    borderColor: "#E9E9E9",
    borderWidth: 1,
  },
  inputTitle: {
    padding: 10,
    paddingBottom: 0,
    fontWeight: "bold",
    color: "#B3B3B3"
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "transparent",
    padding: 10,
    fontSize: 18,
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
