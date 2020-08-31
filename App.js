import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from './app/screens/WelcomeScreen';
import QuoteScreen from './app/screens/QuoteScreen';
import CameraScreen from './app/screens/CameraScreen';
import GameScreen from './app/screens/GameScreen';
import BoxComponent from "./app/screens/BoxComponent";
import BoardComponent from "./app/screens/BoardComponent";


const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }   
  render() {

    return (
     
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: "teal",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Quote" component={QuoteScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
