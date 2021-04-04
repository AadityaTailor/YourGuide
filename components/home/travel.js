

import React, { Component, useEffect, useState } from 'react';
import { ImageBackground, Text, Alert, StyleSheet, Image, TextInput, ScrollView, ActivityIndicator, View, TouchableOpacity, Dimensions } from 'react-native';

import 'firebase/firestore';
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native.js';
import * as Speech from 'expo-speech';
import { AntDesign, createIconSetFromFontello } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view'
import { MaterialIcons } from '@expo/vector-icons'
import DropdownMenu from 'react-native-dropdown-menu'

import video from './Video'
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

import { useFonts } from 'expo-font';
import { color } from 'react-native-reanimated';

const Travel = ({ route, navigation }) => {
    const [data, setData] = useState([]);
    const country = route.params.country
    async function fetch(country) {
        console.log("indside fectch", country)
        // Parse.setAsyncStorage(AsyncStorage)
        Parse.serverURL = 'https://travell.back4app.io';
        Parse.initialize('Hf5BCYdCc60ETnE27Bq3816QXAzc2HFr5bqzdHi2', 'xKZOmFZynEczbPVAfnPYk47hkezEHoSSQm38QpAu', 'naoEAPPljcUy94i1MBbKKyLrmRNpw3w8K27cKE4S');

        const Travel = Parse.Object.extend(country);
        const query = new Parse.Query(Travel);

        await query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            // if (typeof document !== 'undefined') console.log('Places found: ${JSON.stringify(results)}');
            var obj = JSON.parse(JSON.stringify(results))
            console.log(obj)
            var arr = []
            Object.entries(obj).forEach(entry => {
                arr.push(entry)
            })

            console.log("result", results)

            setData(arr)
        }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while fetching B4aVehicle: ${JSON.stringify(error)}`);
            console.error('Error while fetching B4aVehicle', error);
        });
    }

    useEffect(() => {
        fetch(country);
    }, []);

    const _handleTextReady = () => {
        console.log('ready!');
    }
    const _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'rgb(118, 194, 245)', marginTop: 5 }} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    const _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'rgb(118, 194, 245)', marginTop: 5 }} onPress={handlePress}>
                Show less
            </Text>
        );
    }
    async function execute(name, img, desc) {
        const html = `<h1 style="text-align: center;">${name}</h1><br/><img src=${img}><br/><br/><p>${desc}</p><br>`;
        const { uri } = await Print.printToFileAsync({ html });
        Sharing.shareAsync(uri);
    }
    const [loaded] = useFonts({
        'JosefinSans-BoldItalic': require('../../assets/fonts/josefin/static/JosefinSans-BoldItalic.ttf'),
        'JosefinSans-Light': require('../../assets/fonts/josefin/static/JosefinSans-Light.ttf'),
        'JosefinSans-MediumItalic': require('../../assets/fonts/josefin/static/JosefinSans-MediumItalic.ttf'),
        'Roboto-Bold': require('../../assets/fonts/robot/Roboto-Bold.ttf'),
    })

    if (!loaded) {
        return null;
    }

    return (

        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
            <View style={styles.container}>
                <ScrollView>

                    {

                        data.map((obj) => {
                            const a = obj[1].lat
                            const b = obj[1].long
                            const w = obj[1].wiki
                            const v = obj[1].youtube
                            const desc = obj[1].desc
                            const name = obj[1].name
                            const img = obj[1].img

                            return (
                                <View key={obj[0]}>
                                    <Card style={styles.card}>
                                        <Card.Cover source={{ uri: obj[1].img }} />

                                        <View style={{ flex: 1, flexDirection: "row" }}>

                                            <Card.Title title={obj[1].name} style={{ fontFamily: 'Roboto-Bold' }} />
                                            <Text style={{ fontSize: 25, paddingTop: 8 }}>{name}</Text>
                                            <Card style={{ borderRadius: 30, marginLeft: 8, marginTop: 4 }}>
                                                <IconButton
                                                    icon="share"
                                                    color="black"
                                                    size={25}
                                                    onPress={() => execute(name, img, desc)}
                                                    style={{ margin: 6 }}
                                                />
                                            </Card>
                                        </View>
                                        <Card.Content>

                                            <ReadMore
                                                numberOfLines={4}
                                                renderTruncatedFooter={_renderTruncatedFooter}
                                                renderRevealedFooter={_renderRevealedFooter}
                                                onReady={_handleTextReady}
                                            >

                                                <Text style={{ marginTop: 10, fontFamily: 'JosefinSans-MediumItalic', fontSize: 14 }}>
                                                    {obj[1].desc}
                                                </Text>
                                            </ReadMore>

                                        </Card.Content>


                                        <Card style={{ borderRadius: 10, backgroundColor: "#ffffff", marginLeft: 2, marginRight: 2, marginBottom: 3 }}>
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
                                                    onPress={() => { navigation.navigate('Maps', { a, b }) }}
                                                />
                                                <IconButton
                                                    icon="wikipedia"
                                                    color="black"
                                                    size={40}
                                                    onPress={() => { navigation.navigate('Wiki', { w }) }}
                                                />
                                                <IconButton
                                                    icon="youtube"
                                                    color="rgb(255, 79, 94)"
                                                    size={40}
                                                    onPress={() => { navigation.navigate('video', { v }) }}
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
        // backgroundColor: '#eeddff',
        backgroundColor: "#fff"
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
    searchbar: {
        margin: 4,
    },
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
    },
    SplashScreen_RootView: {
        justifyContent: 'center',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    SplashScreen_ChildView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex: 1,
    },
    drawer: {
        position: "absolute",
        left: 4,
        marginTop: 10,
        // color: "white"
    }

});

export default Travel;
    // <IconButton
    //     icon="share-outline"
    //     color="black"
    //     size={40}
    //     style={{ marginLeft: 10 }}
    //     onPress={() => { }}
    // />
                // <View style={styles.preloader}>
                //     <ActivityIndicator size="large" color="black" />
                // </View>