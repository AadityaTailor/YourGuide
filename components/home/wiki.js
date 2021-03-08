import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view'

const Wiki = ({ route }) => {
    const w = route.params.w
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>

            <WebView
                allowsFullscreenVideo
                allowsInlineMediaPlayback
                mediaPlaybackRequiresUserAction
                source={{ uri: w }}

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


export default Wiki