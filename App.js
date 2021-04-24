import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LabMain from "./components/LabMain"
import Lab2 from "./components/Lab2"
import AppLoading from "./components/AppLoading"
import Diagram from "./components/Diagram"
import Working from "./components/Working"
import * as Font from 'expo-font';
import Lab3 from "./components/Lab3/Lab3"
import Lab3DiagramInter from "./components/Lab3/Lab3DiagramInter"
import Lab3DiagramMistake from "./components/Lab3/Lab3DiagramMistake"
import Lab4 from "./components/Lab4/Lab4"
import Lab4Diagram from "./components/Lab4/Lab4Diagram"


const Stack = createStackNavigator();

export default class App extends Component{
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this.loadAssetsAsync()
  }

  loadAssetsAsync = async () => {
    await Font.loadAsync({
      "OpenSansRegular": require('./assets/fonts/OpenSansRegular.ttf'),
      "OpenSansBold": require('./assets/fonts/OpenSans-Bold.ttf'),
      "OpenSansLight": require('./assets/fonts/OpenSans-Light.ttf'),
      "OpenSansItalic": require('./assets/fonts/OpenSans-Italic.ttf'),
      "MontserratBold": require('./assets/fonts/Montserrat-Bold.ttf'),
      "MontserratRegular": require('./assets/fonts/Montserrat-Regular.ttf'),

    })
    this.setState({ fontLoaded: true })
  }


  render(){


    if (!this.state.fontLoaded) {
      return <AppLoading />
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainWindow" options={{ headerShown: false }} component={LabMain}/>
          <Stack.Screen name="Lab2" options={{ headerShown: false }} component={Lab2}/>
          <Stack.Screen name="Diagram" options={{ headerShown: false }} component={Diagram}/>
          <Stack.Screen name="Working" options={{ headerShown: false }} component={Working}/>
          <Stack.Screen name="Lab3" options={{ headerShown: false }} component={Lab3}/>
          <Stack.Screen name="Lab3DiagramInter" options={{ headerShown: false }} component={Lab3DiagramInter}/>
          <Stack.Screen name="Lab3DiagramMistake" options={{ headerShown: false }} component={Lab3DiagramMistake}/>
          <Stack.Screen name="Lab4" options={{ headerShown: false }} component={Lab4}/>
          <Stack.Screen name="Lab4Diagram" options={{ headerShown: false }} component={Lab4Diagram}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
}