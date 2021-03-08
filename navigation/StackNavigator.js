
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Traveling from "../components/home/traveling";
import Maps from '../components/home/map'
import Video from '../components/home/Video'
import Wiki from '../components/home/wiki'
import Profile from '../components/profile'
import TabNavigator from './TabNavigator'
import AuthStackScreen from './AuthStack'
const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Traveling"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "rgb(179, 201, 245)",
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerShown: false
            }}>
            <Stack.Screen
                name="Traveling"
                component={Traveling}
                options={

                    { title: 'Traveling' },
                    { headerLeft: null }
                }
            />
            <Stack.Screen
                name="Maps"
                component={Maps}
                options={
                    { title: 'Explore on Map' }
                }
            />
            <Stack.Screen
                name="Video"
                component={Video}
                options={{ title: 'Video' }}
            />
            <Stack.Screen
                name="Wiki"
                component={Wiki}
                options={{ title: 'Wikipedia' }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'Profile' }}
            />
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
            />
        </Stack.Navigator>
    );
}



export default MainStackNavigator;