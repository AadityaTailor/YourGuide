
// import React from 'react';
// import MapViewDirections from 'react-native-maps-directions';
// import MapView from 'react-native-maps';
// import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'
// import { ImageBackground, Text, StyleSheet, View, Dimensions } from 'react-native';
// import * as Permissions from 'expo-permissions'
// import * as Location from 'expo-location'

// const origin = { latitude: 37.3318456, longitude: -122.0296002 };
// const GOOGLE_MAPS_APIKEY = 'AIzaSyAyeaSpNrfo7OiPoa71WZoNKdw7E5KTkfM';
// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 21.2215787;
// const LONGITUDE = 72.8327162;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// class Maps extends React.Component {

//     state = {
//         locationResult: null,
//         destination: { coords: { latitude: this.props.navigation.state.params.a, longitude: this.props.navigation.state.params.b } },
//         location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
//     };


//     componentDidMount() {
//         this._getLocationAsync();
//     }

//     _handleMapRegionChange = mapRegion => {
//         this.setState({ mapRegion });
//     };

//     _getLocationAsync = async () => {
//         let { status } = await Permissions.askAsync(Permissions.LOCATION);
//         if (status !== 'granted') {
//             this.setState({
//                 locationResult: 'Permission to access location was denied',
//                 location,
//             });
//         }

//         let location = await Location.getCurrentPositionAsync({});
//         console.log(location)
//         this.setState({ locationResult: JSON.stringify(location), location: location.coords, });
//         console.log(this.state.location)
//         console.log(this.state.destination)
//     };
//     render() {

//         return (

//             <SafeAreaProvider>

//                 <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
//                     <View>
//                         <MapView style={styles.mapStyle}
//                             initialRegion={{
//                                 latitude: LATITUDE,
//                                 longitude: LONGITUDE,
//                                 latitudeDelta: LATITUDE_DELTA,
//                                 longitudeDelta: LONGITUDE_DELTA,
//                             }}
//                         >
//                             <MapViewDirections
//                                 origin={this.state.location}
//                                 destination={this.state.destination}
//                                 apikey={GOOGLE_MAPS_APIKEY}
//                                 strokeWidth={3}
//                                 strokeColor="hotpink"
//                             />
//                         </MapView>
//                     </View>
//                 </SafeAreaView>
//             </SafeAreaProvider>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#ecf0f1',
//     },
//     mapStyle: {
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//     },
// })
// export default Maps

import React, { useState, useEffect } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'
import { ImageBackground, Text, StyleSheet, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

const GOOGLE_MAPS_APIKEY = 'AIzaSyAyeaSpNrfo7OiPoa71WZoNKdw7E5KTkfM';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 21.2215787;
const LONGITUDE = 72.8327162;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const origin = { latitude: 21.2215787, longitude: 72.8327162 };
const destination = {
    latitude: 37.771707,
    longitude: -122.4053769,
}

const Maps = ({ route }) => {
    const a = route.params.a
    const b = route.params.a
    console.log(a, b)
    const [locResult, setlocResult] = useState(null)
    const [lat, setLat] = useState(21.2215787)
    const [lon, setLon] = useState(72.8327162)




    const _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setlocResult({
                locationResult: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        setLat({ lat: location.coords.latitude })
        setLon({ lon: location.coords.longitude })
        console.log(location)
        console.log(lat, lon)
    };
    useEffect(() => {
        _getLocationAsync();
    }, []);

    return (


        <SafeAreaProvider>

            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
                <View>
                    <MapView style={styles.mapStyle}
                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                    >
                        <MapViewDirections
                            origin={{ latitude: 21.2215787, longitude: 72.8327162 }}
                            destination={{ latitude: route.params.a, longitude: route.params.b }}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                        />
                    </MapView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
export default Maps

