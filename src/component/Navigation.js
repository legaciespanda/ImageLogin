import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AppStyles } from "../config/AppStyles";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


import MainActivity from "../activity/MainActivity";

// Import Custom Sidebar
import CustomSidebarMenu from "./CustomSidebarMenu";
import NavigationDrawerHeader from "./NavigationDrawerHeader"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function MainActivityStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MainActivity"
      screenOptions={{
        headerLeft: () => (
          //<NavigationDrawerStructure navigationProps={navigation} />
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: AppStyles.color.main, //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="MainActivity"
        component={MainActivity}
        options={{
          title: "Home - ImageLogin", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function NavigationComponent() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: AppStyles.main.activeTintColor,
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="MainActivity"
          options={{ drawerLabel: "Home" }}
          component={MainActivityStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponent;
