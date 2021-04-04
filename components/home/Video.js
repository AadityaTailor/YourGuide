// import React from 'react'
// import { Text, View, StyleSheet, Button } from 'react-native'
// import { WebView } from 'react-native-webview';
// import SafeAreaView from 'react-native-safe-area-view'

// const Video = ({ route }) => {
//     const v = route.params.v
//     return (
//         <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>

//             <WebView
//                 allowsFullscreenVideo
//                 allowsInlineMediaPlayback
//                 mediaPlaybackRequiresUserAction
//                 source={{ uri: v }}
//             />
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     center: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center"
//     }
// })



import * as React from 'react'
import { View, StyleSheet, Button, ImageBackground, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default video = ({ route }) => {
    const vi = route.params.v
    console.log(vi)
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <ImageBackground source={{
                uri: "https://www.dropbox.com/s/4suc8i9aifvdl1n/a.jpg?dl=1"
            }} style={styles.image}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: vi
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
                <View style={styles.buttons}>
                    <Button
                        title={status.isPlaying ? 'Pause' : 'Play'}
                        onPress={() =>
                            status.isPlaying
                                ? video.current.pauseAsync()
                                : video.current.playAsync()
                        }
                    />
                </View>
            </ImageBackground>
        </View>

    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

// backgroundColor: '#ecf0f1',
// backgroundColor: '#abcdef',
