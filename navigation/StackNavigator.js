
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Travel from "../components/home/travel";
import Maps from '../components/home/map'
import video from '../components/home/Video'
import Wiki from '../components/home/wiki'
import Profile from '../components/profile'
import Country from '../components/home/country'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Country"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "rgb(179, 201, 245)",
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerShown: false,
            }}>
            <Stack.Screen
                name="Travel"
                component={Travel}
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
                name="Country"
                component={Country}
                options={
                    { title: 'Country' }
                }
            />
            <Stack.Screen
                name="video"
                component={video}
                options={
                    { title: 'Video' }
                }
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

        </Stack.Navigator>
    );
}



export default MainStackNavigator;