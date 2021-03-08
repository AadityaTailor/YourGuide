import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view'

const About = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
            <WebView
                source={{
                    uri: 'https://maps.google.co.in'
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
})


export default About

//     < WebView
// allowsFullscreenVideo
// allowsInlineMediaPlayback
// mediaPlaybackRequiresUserAction
// source = {{ uri: "https://www.google.com/maps/" }}
// />