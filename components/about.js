import React from 'react';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'
import { ImageBackground, Text, StyleSheet, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 18.922, longitude: 72.8347 };
const GOOGLE_MAPS_APIKEY = '';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 21.2215787;
const LONGITUDE = 72.8327162;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import MapView from 'react-native-maps';



class About extends React.Component {
    state = {
        locationResult: null,
        location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
                location,
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
        this.setState({ locationResult: JSON.stringify(location), location: location.coords, });
        console.log(this.state.location)
    };
    render() {

        return (

            <SafeAreaProvider>

                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>

                    <View>
                        <MapView
                            style={styles.mapStyle}
                            mapType={"hybrid"}
                            region={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude, latitudeDelta: 0.0025, longitudeDelta: 0.0025 }}
                            zoomEnabled={true}
                            scrollEnabled={true}
                            showsScale={true}
                        />
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>

        )
    }
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

export default About
