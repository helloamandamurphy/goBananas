import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Share,
  Text,
  View,
} from "react-native";
import quoteData from "../quoteData";
import runts from "../assets/runts.jpg";

function QuoteScreen({ navigation }) {
  const quoteInfo = quoteData[Math.floor(Math.random() * quoteData.length)];
  const quoteText = quoteInfo.quote;
  const authorName = quoteInfo.author;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: quoteText,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("1");
        } else {
          console.log("2");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("3");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ImageBackground source={runts} style={{ width: "100%", height: "100%" }}>
      <View style={styles.edge}>
        <View style={styles.textBlock}>
          <Text style={styles.quoteText}>"{quoteText}"</Text>
          <Text style={styles.authorName}>-{authorName}</Text>
        </View>

        <View style={styles.buttonFill}>
          <Button onPress={onShare} title="Share"></Button>
        </View>

        <View style={styles.buttonFill}>
          <Button
            title="Take a Photo"
            onPress={() => navigation.navigate("Camera")} //must match any name prop given in App.js for the Stack Screen
          ></Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  edge: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  textBlock: {
    padding: 20,
    backgroundColor: "white",
  },

  quoteText: {
    fontFamily: "HelveticaNeue-Thin",
    fontSize: 22,
  },

  authorName: {
    fontFamily: "HelveticaNeue-Medium",
    padding: 10,
    textAlign: "right",
  },

  buttonFill: {
    backgroundColor: "#51cb2c",
    width: "50%",

    justifyContent: "center",
    margin: 5,
  },
});

export default QuoteScreen;
