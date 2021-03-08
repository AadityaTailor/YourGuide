import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ title, navigation }) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/travel.jpg')} style={styles.header} >
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#f33',
        letterSpacing: 1
    },
    icon: {
        position: "absolute",
        left: 4
    }
})