import React from 'react';
import {
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function QuoteScreen({ navigation }) {
    return (
        <Button
            title="Take Pic"
            style={styles.someButton}
            onPress={() => navigation.navigate("Camera")} //must match any name prop given in App.js for the Stack Screen
        ></Button>
);}
    
const styles = StyleSheet.create({
    someButton: {
        color: "red",
        justifyContent: "flex-start"
    }
});
        
    

export default QuoteScreen;