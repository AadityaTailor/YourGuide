import React from 'react'
import * as Speech from 'expo-speech';

import { Searchbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'
import Traveling from './traveling'
import { ImageBackground, Text, Alert, StyleSheet, Image, TextInput, ScrollView, ActivityIndicator, View, TouchableOpacity, Dimensions } from 'react-native';
import Parse from 'parse/react-native.js';
import { AsyncStorage } from 'react-native';
import * as Font from 'expo-font'
const margin = (Dimensions.get('window').width) / 2

class Country extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: [],
			carr: []
		};
	}
	componentDidMount() {
		Font.loadAsync({
			'Montserrat-ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
			'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
		});
	}
	async UNSAFE_componentWillMount() {
		Parse.setAsyncStorage(AsyncStorage)
		Parse.serverURL = 'https://travell.back4app.io';
		Parse.initialize('Hf5BCYdCc60ETnE27Bq3816QXAzc2HFr5bqzdHi2', 'xKZOmFZynEczbPVAfnPYk47hkezEHoSSQm38QpAu', 'naoEAPPljcUy94i1MBbKKyLrmRNpw3w8K27cKE4S');

		const cname = Parse.Object.extend('country');
		const query = new Parse.Query(cname);

		await query.find().then((results) => {
			// You can use the "get" method to get the value of an attribute
			// Ex: response.get("<ATTRIBUTE_NAME>")
			if (typeof document !== 'undefined') document.write(`Places found: ${JSON.stringify(results)}`);
			var obj = JSON.parse(JSON.stringify(results))
			var arr = []
			Object.entries(obj).forEach(entry => {
				arr.push(entry)
			})
			// console.log('Places found', arr);
			this.setState({
				arr: arr,
				isLoading: false
			})
			console.log(arr)
		}, (error) => {
			if (typeof document !== 'undefined') document.write(`Error while fetching B4aVehicle: ${JSON.stringify(error)}`);
			console.error('Error while fetching B4aVehicle', error);
		});

	}
	twoFun = (country) => {
		Speech.speak("Welcome to " + country)

	}

	render() {

		return (
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1, }} forceInset={{ top: 'always' }} nestedScrollEnabled={true}>
					<View style={{}}>
						<Searchbar
							placeholder="Search"
							onChangeText={() => { }}
							value={""}
							onIconPress={() => {
								this.props.navigation.openDrawer()
							}}
							icon="menu"
							style={styles.searchbar}
						/>

						<ScrollView>
							{this.state.arr.map((obj) => {
								const country = obj[1].cname || " "

								const cname = country[0].toUpperCase() + country.slice(1)
								return (
									<View key={obj[0]}>
										<TouchableOpacity onPress={() => { this.twoFun(cname); this.props.navigation.navigate('Travel', { country }) }}>
											<Card style={{ borderRadius: 13, backgroundColor: "#fffedf", margin: 6, width: '97%' }}>
												<Card.Content style={{ flexDirection: "row" }}>
													<Card.Cover source={{ uri: obj[1].flag }} style={{ position: "absolute", height: 60, width: 160, marginLeft: 10, borderRadius: 4, marginTop: 3 }} />
													<Title style={{ marginLeft: margin, fontFamily: 'Montserrat-SemiBold' }}>{cname}</Title>
													<Paragraph></Paragraph>
												</Card.Content>

											</Card>
										</TouchableOpacity>
									</View>
								)
							})}
						</ScrollView>
					</View>
				</SafeAreaView>
			</SafeAreaProvider >
		)
	}
}
// this.props.navigation.navigate('Traveling', { country })
// backgroundColor: "#4d4d4d" 
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fffcfe',
	},
	caption: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	searchbar: {
		margin: 4,
	},
});
export default Country;

		// <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />