import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view'

const Video = ({ route }) => {
    const v = route.params.v
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>

            <WebView
                allowsFullscreenVideo
                allowsInlineMediaPlayback
                mediaPlaybackRequiresUserAction
                source={{ uri: v }}
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


export default Video