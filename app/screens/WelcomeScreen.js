import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity, Dimensions
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Video } from 'expo-av';

const { width } = Dimensions.get("window");

function WelcomeScreen({ navigation }) {
    return (
      <View>
        <React.Fragment>
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
        <Button
          title="Get Quote"
          style={styles.someButton}
          onPress={() => navigation.navigate("Quote")}
          ></Button>
          </React.Fragment>
      </View>
    );
}

const styles = StyleSheet.create({ //button wont move down...
  someButton: {
    justifyContent: "flex-end",
        position: "absolute",
        top: 300,
        alignContent: 'flex-end',
        flex: 1
    
  },
});

export default WelcomeScreen;