import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Video } from "expo-av";

const { width } = Dimensions.get("window");

function WelcomeScreen({ navigation }) {
  return (
    <React.Fragment>
      <View>
        <React.Fragment>
        <Video
          source={require("../assets/GoBananas2.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%", height: "95%" }}
          ></Video>
          </React.Fragment>
      </View>
      <View style={styles.someButton}>
        <Button
          title="Get Your Banana Quote of the day!"
          style={styles.someButton}
          onPress={() => navigation.navigate("Quote")} //must match any name prop given in App.js for the Stack Screen
        ></Button>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  someButton: {
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: '38%',
    alignContent: "flex-end",
    flex: 1,
  },
});

export default WelcomeScreen;
