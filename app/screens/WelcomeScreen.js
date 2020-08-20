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
        <Video
          source={require("../assets/GoBananas.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%", height: "100%" }}
        ></Video>
      </View>
      <View style={styles.someButton}>
        <Button
          title="Get Quote"
          // style={styles.someButton}
          onPress={() => navigation.navigate("Quote")} //must match any name prop given in App.js for the Stack Screen
        ></Button>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  //button wont move down...
  someButton: {
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    alignContent: "flex-end",
    flex: 1,
  },
});

export default WelcomeScreen;
