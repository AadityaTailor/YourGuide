
import React, { useState, useEffect } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'
import { ImageBackground, Text, StyleSheet, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

const GOOGLE_MAPS_APIKEY = '';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 21.2215787;
const LONGITUDE = 72.8327162;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Maps = ({ route }) => {
    const a = route.params.a
    const b = route.params.a
    console.log(a, b)
    const origin = { latitude: 21.2215787, longitude: 72.8327162 };
    const destination = { latitude: a, longitude: b };
    const [locResult, setlocResult] = useState(null)
    const [location, setLocation] = useState({ coords: { latitude: 21.2215787, longitude: 72.8327162 } })


    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setlocResult({
                locationResult: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
        setLocation({ location: location.coords });

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
                            destination={{ latitude: 21.01211, longitude: 71.82121 }}
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

