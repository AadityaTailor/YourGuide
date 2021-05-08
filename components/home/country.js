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
			carr: [],
			search: true,
			result: [],
			searchCountry: "",
			isLoading: true,
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
		Parse.serverURL = 'https://yourgude.b4a.io'; // This is your Server URL
		Parse.initialize(
			'A8y1qtKnErg69N17IKAACVYuHUao65JRfkoakUuK', // This is your Application ID
			'tLsWixwPxTel1uEVyBImI9jVnKCB5Xeat7opnxPz', // This is your Javascript key
			'cJQXK6TCdljtWy39hc7j4MG1Msj5mow132NW4KdE' // This is your Master key (never use it in the frontend)
		);
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
	notFound = () => {
		Speech.speak("Opps... Country is Not Found")
	}

	handleSearch = (text) => {
		l = text.length
		if (text == "") {
			this.setState({ searchCountry: text, search: true })
		} else {
			this.setState({ searchCountry: text, search: false, result: this.state.arr.filter(word => word[1].cname.toLowerCase().slice(0, l) == text.toLowerCase().slice(0, l)) })
		}
		// console.log("Result: ", this.state.result)
		// console.log("Country: ", this.state.arr)
	}
	handleRender = () => {
		this.setState({ ...this.state, search: true })
	}

	render() {

		if (this.state.isLoading) {
			return (
				<ActivityIndicator size="large" color="#000" style={styles.preloader} />
			)
		}
		return (
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1, }} forceInset={{ top: 'always' }} nestedScrollEnabled={true}>
					<View style={{}}>
						<Searchbar
							placeholder="Search here..."
							onChangeText={(text) => this.handleSearch(text)}
							value={this.state.searchCountry}
							onIconPress={() => {
								this.props.navigation.openDrawer()
							}}
							onCancel={this.handleRender}
							onClear={this.handleRender}
							icon="menu"
							style={styles.searchbar}
						/>

						{this.state.search ? <ScrollView>


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
							: <View>{

								this.state.result.length > 0 ? <ScrollView>


									{this.state.result.map((obj) => {
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
								</ScrollView> : <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '30%' }}>
									<Text style={{ color: "#f00" }}>Opps...Country is Not Found</Text>
								</View>
							}
							</View>
						}
					</View>
				</SafeAreaView>
			</SafeAreaProvider>
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
	preloader: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '80%'
	},
});
export default Country;

		// <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />