import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  createBottomTabNavigator, TabBarBottom,} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AlmacenarRact from "./screen/AlmacenarReact";
import AlmacenarExpo from "./screen/AlmacenarExpo";
import Login from "./screen/Login";
import RegistroExpo from "./screen/RegistroExpo";
import RegistroReact from "./screen/RegistroReact";

const Tab = createStackNavigator();

const App = () => {
   const [activeTab, setActiveTab] = useState("Home");
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Expo" component={AlmacenarExpo} />
          <Tab.Screen name="React" component={AlmacenarRact} />
          <Tab.Screen name="RegistroExpo" component={RegistroExpo}/>
          <Tab.Screen name="RegistroReact" component={RegistroReact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
