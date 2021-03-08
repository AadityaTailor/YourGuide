import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

export default function Profile() {
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>

            <ScrollView style={{ flex: 1, height: SCREEN_HEIGHT }}>
                <View style={{ flex: 1, height: SCREEN_HEIGHT }}>
                    <ImageBackground
                        source={{
                            uri: 'https://www.dropbox.com/s/x1b4od595ev03ug/IMG_20201028_123223_990.jpg?dl=1'
                        }}
                        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.4 }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                margin: 20,
                            }}
                        >
                            <FontAwesome
                                name="close"
                                size={30}
                                color="#fff"
                                onPress={() => { }}
                            />
                            <MaterialIcons
                                name="edit"
                                size={30}
                                color="#fff"
                            />
                        </View>
                    </ImageBackground>
                    <View
                        style={{
                            height: SCREEN_HEIGHT * 2,
                            width: SCREEN_WIDTH * 0.9,
                            backgroundColor: "#fff",
                            position: "absolute",
                            left: (SCREEN_WIDTH - SCREEN_WIDTH * 0.9) / 2,
                            top: SCREEN_HEIGHT * 0.3,
                        }}
                    >
                        <TextInput
                            label="First Name"

                            mode="flat"
                            onChangeText={(text) => { }}
                            style={{ margin: 20, backgroundColor: "#fff" }}
                        />

                        <TextInput
                            label="Last Name"

                            mode="flat"
                            onChangeText={() => { }}
                            style={{ margin: 20, backgroundColor: "#fff" }}
                        />

                        <Button
                            style={{
                                marginHorizontal: 50,
                                marginVertical: 20,
                                backgroundColor: "#0af",
                                padding: 10,
                            }}
                            mode="contained"
                            onPress={() => { }}
                        >
                            Update
              </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})