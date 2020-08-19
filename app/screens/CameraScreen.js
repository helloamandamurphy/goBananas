import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function CameraScreen({ navigation }) {
  return (
    <Button
      title="Get Quote"
      style={styles.someButton}
      onPress={() => navigation.navigate("Quote")} //must match any name prop given in App.js for the Stack Screen
    ></Button>
  );
}

const styles = StyleSheet.create({
  someButton: {
    color: "red",
    justifyContent: "flex-start",
  },
});

export default CameraScreen;