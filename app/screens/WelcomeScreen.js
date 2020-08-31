import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Dimensions, Linking, SafeAreaView
} from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { Video } from "expo-av";

const { width } = Dimensions.get("window");

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Inpsired By the{" "}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.aboutamazon.com/the-community-banana-stand"
              )
            }
          >
            <Text style={styles.quoteButton}>Amazon Banana Stands!</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Video
        source={require("../assets/GoBananas2.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Game")}>
          <Text style={styles.quoteButton}>
            Play to get a Banana Quote of the day!
          </Text>
        </TouchableOpacity>
      </Video>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteButton: {
    backgroundColor: 'pink'
  },
  linkBox: {
    flex: 1
  },
  container: {
    flex: 1,
  },
  someButton: {
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    left: "38%",
    alignContent: "flex-end",
    flex: 1,
    backgroundColor: "teal",
    //color: "white"
  },
  bottomView: {
    backgroundColor: "pink",
    height: "50%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  textLink: {
    // alignContent: "center",
    // justifyContent: 'center',
    // position: "absolute",
    // top: 255,
    // left: 48,
    fontFamily: "Arial",
    fontSize: 20,
    fontStyle: "italic",
    color: "pink",
  },
  textBox: {
    backgroundColor: "teal",
    height: "10%",
    width: "86%",
    position: "absolute",
    top: "30%",
    left: "5%",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
     flex: 1,
  },
});

export default WelcomeScreen;
