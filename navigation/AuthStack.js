import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/user/login";
import SignUp from "../components/user/signUp";

import MainStackNavigator from './StackNavigator'

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="LogIn"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "rgb(179, 201, 245)",
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <AuthStack.Screen
                name="Sign Up"
                component={SignUp}
                title="Sign Up"
            />
            <AuthStack.Screen
                name="LogIn"
                component={Login}
                title="Log In"
            />
        </AuthStack.Navigator>
    );
};

export default AuthStackScreen