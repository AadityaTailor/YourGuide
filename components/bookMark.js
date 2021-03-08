// App.js

import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view'
export default function BookMark() {
    return (
        <View style={styles.container}>
            <Text>Book marks</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#eeddff',
        alignItems: "center",
        justifyContent: "center"
    },

});
