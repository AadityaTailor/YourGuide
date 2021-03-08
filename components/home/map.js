
import MapView from 'react-native-maps';
import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
const Maps = ({ route }) => {
    const a = route.params.a
    const b = route.params.b
    return (

        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
            <View>
                <MapView
                    style={styles.mapStyle}
                    mapType={"hybrid"}
                    region={{ latitude: a, longitude: b, latitudeDelta: 0.0025, longitudeDelta: 0.0025 }}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsScale={true}
                />
            </View>
        </SafeAreaView>

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