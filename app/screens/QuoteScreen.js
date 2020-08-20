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
import quoteData from "../quoteData";

// const quote = quoteData[Math.floor(Math.random() * quoteData.length)];
// const author = quote.author;


function QuoteScreen({ navigation }) {

    return (
        <View>
            
            
            <Button
              title="Take Pic"
              style={styles.someButton}
              onPress={() => navigation.navigate("Camera")} //must match any name prop given in App.js for the Stack Screen
            ></Button>
      </View>
     
    );}
    

  return (
    <React.Fragment>
      <Text style={styles.quoteText}>"{quoteText}"</Text>
      <Text style={styles.authorName}>-{authorName}</Text>
      <Button
        title="Take Pic"
        style={styles.someButton}
        onPress={() => navigation.navigate("Camera")} //must match any name prop given in App.js for the Stack Screen
      ></Button>
    </React.Fragment>
  );


const styles = StyleSheet.create({
  someButton: {
    color: "red",
    justifyContent: "flex-start",
  },

  quoteText: {
    fontSize: 24,
    padding: 20,
  },

  authorName: {
    // justifyContent: "right",
    padding: 20,
  },
});

const quoteInfo = quoteData[Math.floor(Math.random() * quoteData.length)];
const quoteText = quoteInfo.quote;
const authorName = quoteInfo.author;

export default QuoteScreen;
