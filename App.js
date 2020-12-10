import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View,  BackHandler, AppRegistry  } from 'react-native';
;
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from "./src/core/Theme"
import { name as appName } from './app.json';

import { checkConnected } from "./src/config/InternetDetect";
import NoInternetActivity from "./src/activity/NoInternetActivity";

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginActiviy">
      <Stack.Screen
        name="LoginActivity"
        component={LoginActivity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterActivity"
        component={RegisterActivity}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: AppStyles.color.main, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {

  const [connectStatus, setConnectStatus] = useState(false);
  
  //check for internet connection and set connection status
    checkConnected().then(checkConnected=>{
    setConnectStatus(checkConnected)
  });

  return connectStatus ? (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />

        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="NavigationComponent"
          component={NavigationComponent}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  ) : (
      <PaperProvider theme={theme}>
        {internetDialog()}
      </PaperProvider>
    );
}

//internet dialog
const internetDialog = () => {
  Alert.alert(
    "Error in Internet Connection",
    "To use ImageLogin App, Turn on mobile data or connect to Wi-Fi",
    [
      {
        text: "No",
        onPress: () => BackHandler.exitApp(), 
        style: "cancel",
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
AppRegistry.registerComponent(appName, () => App);