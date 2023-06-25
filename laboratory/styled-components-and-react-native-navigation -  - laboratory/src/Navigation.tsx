import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen  from "./screens/HomeScreen"
import SettingsScreens from "./screens/SettingsScreens"
import SlackScreens from "./screens/SlackScreens"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigation = createNativeStackNavigator()

const Tab = createBottomTabNavigator ();

function MyStack(){
    return(
        <HomeStackNavigation.Navigator
        initialRouteName="HomeScreenMyStack"
        >
            <HomeStackNavigation.Screen name="HomeScreenMyStack" component={HomeScreen} />
            <HomeStackNavigation.Screen name="Stack" component={SlackScreens} options={{
                headerBackTitleVisible: false
            }}/>
        </HomeStackNavigation.Navigator>
    )
}

function MyTabs (){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: 'purple'
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={MyStack}
            options={{
                tabBarLabel: "Inicio",
                tabBarIcon: ({color}):JSX.Element => <MaterialCommunityIcons name="home" color={color} size={40} />,
                headerShown: false                 
            }}
              />
            <Tab.Screen 
            name="SettingsScreens" 
            component={SettingsScreens} 
            options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({color}):JSX.Element => <MaterialCommunityIcons name="brightness-5" color={color} size={30} />,
                
            }}
            />
            
        </Tab.Navigator>
    )
}

 const Navigation = ():JSX.Element => {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  )
}

export default Navigation