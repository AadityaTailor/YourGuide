
import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Traveling from "../components/home/traveling";
import BookMark from "../components/bookMark";
import Maps from "../components/home/map";

import About from '../components/about'
import Account from '../components/account'
import MainStackNavigator from "./StackNavigator";

// const Tab = createBottomTabNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
// #0984e3
const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Traveling" activeColor="#000" shifting>
            <Tab.Screen
                name="Traveling"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: "Explore",
                    // tabBarColor: "rgb(148, 114, 130)",
                    tabBarColor: "#fff",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" color="black" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="BookMark"
                component={BookMark}
                options={{
                    tabBarLabel: "BookMark",
                    // tabBarColor: "#00b894",
                    tabBarColor: "#fff",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="bookmark-outline"
                            color="black"
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={About}
                options={{
                    tabBarLabel: "Map",
                    // tabBarColor: "rgb(164, 132, 245)",
                    tabBarColor: "#fff",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="google-maps" color="black" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: "Account",
                    // tabBarColor: "#fd79a8",
                    tabBarColor: "#fff",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-outline" color="black" size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};


export default TabNavigator;