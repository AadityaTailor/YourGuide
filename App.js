// App.js

import React, { useState, useEffect } from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'

import Traveling from './components/home/traveling';
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Signup from './components/user/signUp'
import DrawerNavigator from "./navigation/DrawerNavigator";
import TabNavigator from "./navigation/TabNavigator";
import AuthStackScreen from './navigation/AuthStack'
import firebase from './components/database/firebase'
import StackNavigator from './navigation/StackNavigator'


import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


export default function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const checkForUpdate = async () => {
		try {
			const update = await Updates.checkForUpdateAsync();
			if (update.isAvailable) {
				await Updates.fetchUpdateAsync();
				Alert.alert(
					"Update Available",
					"Your App will be updated. Application will restart automatically after update.",
					[
						{
							text: "OK",
							onPress: async () => {
								console.log("Update Started");
								await Updates.reloadAsync();
							},
						},
					]
				);
			}
		} catch (e) {
			console.log(e);
		}
	};


	// useEffect(() => {
	// 	firebase.auth().onAuthStateChanged(async (user) => {
	// 		if (user) {
	// 			setIsLoading(false);
	// 			setIsLogin(true);
	// 		} else {
	// 			firebase.auth().signOut();
	// 		}
	// 	}
	// 	);
	// 	checkForUpdate();
	// }, []);

	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<TabNavigator />
			</SafeAreaProvider>
		</NavigationContainer>
	);
}