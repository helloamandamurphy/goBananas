import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Dimensions, Linking
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
            style={{ width: "100%", height: 700 }}
          >
          </Video>
        </React.Fragment>
      </View>
            <View style={styles.textBox}>
              <Text
                style={styles.textLink}
                onPress={() =>
                  Linking.openURL(
                    "https://www.aboutamazon.com/the-community-banana-stand"
                  )
                }
              >
                Inspired by the Amazon Banana Stands!
              </Text>
            </View>
      <View style={styles.bottomView}>
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
    bottom: 40,
    left: '38%',
    alignContent: "flex-end",
    flex: 1,
    backgroundColor: 'teal'
  },
  bottomView: {
    backgroundColor: "pink",
    height: 100,
    flex: 1,
    alignContent: "center",
    justifyContent: 'center',
    
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
    color: "white"
  },
  textBox: {
    backgroundColor: "teal",
    height: 40,
    width: '86%',
    position: "absolute",
    top: 235,
    left: 30,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default WelcomeScreen;
