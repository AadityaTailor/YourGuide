

import React, { Component } from 'react';
import { ImageBackground, Text, Alert, StyleSheet, Image, TextInput, ScrollView, ActivityIndicator, View, TouchableOpacity, Dimensions } from 'react-native';

import 'firebase/firestore';
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native.js';
import * as Speech from 'expo-speech';
import { AntDesign } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view'

import DropdownMenu from 'react-native-dropdown-menu'

import Video from './Video'
import MapView from 'react-native-maps'
import ReadMore from 'react-native-read-more-text';
import Details from './map'
import { Searchbar } from 'react-native-paper'
import {
    Avatar,
    Paragraph,
    Card,
    Button,
    IconButton,
    useTheme,
    ToggleButton
} from 'react-native-paper';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
class Traveling extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            isLoading: true,
            searchText: "",
            filteredData: [],
            searchB: false
        };
    }


    updateSearch = search => { this.setState({ search }) }

    async UNSAFE_componentWillMount() {
        Parse.setAsyncStorage(AsyncStorage)
        Parse.serverURL = 'https://travell.back4app.io';
        Parse.initialize('Hf5BCYdCc60ETnE27Bq3816QXAzc2HFr5bqzdHi2', 'xKZOmFZynEczbPVAfnPYk47hkezEHoSSQm38QpAu', 'naoEAPPljcUy94i1MBbKKyLrmRNpw3w8K27cKE4S');

        const Travel = Parse.Object.extend('Travel');
        const query = new Parse.Query(Travel);

        await query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            if (typeof document !== 'undefined') document.write(`Places found: ${JSON.stringify(results)}`);
            var obj = JSON.parse(JSON.stringify(results))
            var arr = []
            Object.entries(obj).forEach(entry => {
                arr.push(entry)
            })
            console.log('Places found', arr[0][1].lon);
            this.setState({
                arr: arr,
                isLoading: false
            })
        }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while fetching B4aVehicle: ${JSON.stringify(error)}`);
            console.error('Error while fetching B4aVehicle', error);
        });
        ;
    }

    // readAllItems = async () => {

    //     Parse.setAsyncStorage(AsyncStorage)
    //     Parse.serverURL = 'https://travell.back4app.io';
    //     Parse.initialize('Hf5BCYdCc60ETnE27Bq3816QXAzc2HFr5bqzdHi2', 'xKZOmFZynEczbPVAfnPYk47hkezEHoSSQm38QpAu', 'naoEAPPljcUy94i1MBbKKyLrmRNpw3w8K27cKE4S');

    //     const Travel = Parse.Object.extend('Travel');
    //     const query = new Parse.Query(Travel);

    //     await query.find().then((results) => {
    //         // You can use the "get" method to get the value of an attribute
    //         // Ex: response.get("<ATTRIBUTE_NAME>")
    //         if (typeof document !== 'undefined') document.write(`Places found: ${JSON.stringify(results)}`);
    //         var obj = JSON.parse(JSON.stringify(results))
    //         var arr = []
    //         Object.entries(obj).forEach(entry => {
    //             arr.push(entry)
    //         })
    //         console.log('Places found', arr[0][1].name);
    //         this.setState({
    //             arr: arr
    //         })
    //     }, (error) => {
    //         if (typeof document !== 'undefined') document.write(`Error while fetching B4aVehicle: ${JSON.stringify(error)}`);
    //         console.error('Error while fetching B4aVehicle', error);
    //     });
    //     ;
    // }
    // #9E9E9E
    mapRender = () => this.props.navigation.navigate('Details')
    search = (searchText) => {
        this.setState({ searchText: searchText, searchB: true });

        let filteredData = this.state.data.filter(function (item) {
            return item.description.includes(searchText);
        });

        this.setState({ filteredData: filteredData });
    };

    _handleTextReady = () => {
        console.log('ready!');
    }
    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'rgb(118, 194, 245)', marginTop: 5 }} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'rgb(118, 194, 245)', marginTop: 5 }} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>


                <View style={styles.container}>

                    <View style={{ flexDirection: 'row' }}>
                        <Searchbar
                            placeholder="Search here ..."
                            style={{ marginLeft: 7, width: '86%', borderStyle: 'solid', borderWidth: 1, borderRadius: 10 }}
                            onChangeText={this.search}
                            value={this.state.searchText}
                        />
                        <Feather name="filter" size={30} color="black" style={{ marginTop: 10, marginLeft: 5 }} />
                    </View>

                    <ScrollView>

                        {

                            this.state.arr.map((obj) => {
                                const a = obj[1].lat
                                const b = obj[1].lon
                                const w = obj[1].wiki
                                const v = obj[1].youtube
                                return (
                                    <View key={obj[0]}>
                                        <Card style={styles.card}>
                                            <Card.Cover source={{ uri: obj[1].img }} />

                                            <View style={{ flex: 1, flexDirection: "row" }}>

                                                <Card.Title title={obj[1].name} />
                                                <Text style={{ fontSize: 30, paddingTop: 8 }}>{obj[1].name}</Text>
                                            </View>
                                            <Card.Content>

                                                <ReadMore
                                                    numberOfLines={4}
                                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                                    renderRevealedFooter={this._renderRevealedFooter}
                                                    onReady={this._handleTextReady}
                                                >

                                                    <Text style={{ marginTop: 10 }}>
                                                        {obj[1].desc}
                                                    </Text>
                                                </ReadMore>

                                            </Card.Content>


                                            <Card style={{ borderRadius: 10, backgroundColor: "#ffffff", marginLeft: 2, marginRight: 2 }}>
                                                <View style={styles.icon}>
                                                    <IconButton
                                                        icon="play-circle-outline"
                                                        color="black"
                                                        size={40}
                                                        onPress={() => Speech.speak(obj[1].desc)}
                                                    />
                                                    <IconButton
                                                        icon="stop-circle-outline"
                                                        color="black"
                                                        size={40}
                                                        onPress={() => Speech.stop()}
                                                    />
                                                    <IconButton
                                                        icon="google-maps"
                                                        color="green"
                                                        size={40}
                                                        onPress={() => this.props.navigation.navigate('Maps', { a, b })}
                                                    />
                                                    <IconButton
                                                        icon="wikipedia"
                                                        color="black"
                                                        size={40}
                                                        onPress={() => { this.props.navigation.navigate('Wiki', { w }) }}
                                                    />
                                                    <IconButton
                                                        icon="youtube"
                                                        color="rgb(255, 79, 94)"
                                                        size={40}
                                                        onPress={() => { this.props.navigation.navigate('Video', { v }) }}
                                                    />

                                                </View>
                                            </Card>
                                        </Card>

                                    </View>
                                )
                            })
                        }

                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
// #fff299 background of border
// icon:rgb(105, 102, 107)
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     display: "flex",
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#eeddff'
    //     // #ffcdfd
    // },
    // textStyle: {
    //     fontSize: 15,
    //     marginBottom: 20
    // },
    // title: {
    //     textAlign: "center",
    //     borderWidth: 3,
    //     marginTop: 10,
    //     marginBottom: 10,
    //     borderBottomWidth: 4,
    //     marginLeft: 20,
    //     marginRight: 20,
    //     borderRadius: 40,
    //     borderStyle: "dashed",
    //     borderColor: "grey",
    //     fontWeight: "bold"
    // },
    // desc: {
    //     borderStyle: "dashed",
    //     borderRadius: 1,
    //     marginLeft: 20,
    //     marginRight: 20
    // },
    container: {
        flex: 1,
        backgroundColor: '#eeddff'
    },
    title: {
        flexDirection: "row"
    },
    content: {
        padding: 6,
        marginTop: 30
    },
    card: {
        margin: 5,
        backgroundColor: '#eefefe'
    },
    // containerDesc: {
    //     borderWidth: 3,
    //     marginTop: 10,
    //     marginBottom: 10,
    //     borderBottomWidth: 4,
    //     marginLeft: 20,
    //     marginRight: 20,
    //     borderRadius: 20,
    //     borderStyle: "dashed",
    //     borderColor: "grey",
    //     paddingTop: 10,
    //     paddingBottom: 10
    // },

    icon: {
        flexDirection: "row",
        color: "rgb(137, 149, 173)"
    },
    preloader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80%'
    },
    cardText: {
        fontSize: 14,
    }
});

export default Traveling;
    // <IconButton
    //     icon="share-outline"
    //     color="black"
    //     size={40}
    //     style={{ marginLeft: 10 }}
    //     onPress={() => { }}
    // />