import React from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import quoteData from "../quoteData";
import runts from "../assets/runts.jpg";

function QuoteScreen({ navigation }) {
  return (
    <ImageBackground source={runts} style={{ width: "100%", height: "100%" }}>
      <View style={styles.edge}>
        <View style={styles.textBlock}>
          <Text style={styles.quoteText}>"{quoteText}"</Text>
          <Text style={styles.authorName}>-{authorName}</Text>
        </View>
        <Button
          title="Take Pic"
          style={styles.someButton}
          onPress={() => navigation.navigate("Camera")} //must match any name prop given in App.js for the Stack Screen
        ></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  edge: {
    padding: 20,
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
});

const quoteInfo = quoteData[Math.floor(Math.random() * quoteData.length)];
const quoteText = quoteInfo.quote;
const authorName = quoteInfo.author;

export default QuoteScreen;
