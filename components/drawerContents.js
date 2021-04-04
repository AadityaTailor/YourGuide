import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    TouchableOpacity,
} from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
// import Profile from './profile'


export function DrawerContent(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);
    // const navigation = useNavigation()
    return (

        <DrawerContentScrollView {...props}>
            <View
                style={
                    styles.drawerContent
                }
            >
                <View style={styles.userInfoSection}>


                    <Avatar.Image
                        source={{
                            uri: "https://www.dropbox.com/s/x1b4od595ev03ug/IMG_20201028_123223_990.jpg?dl=1",
                        }}
                        size={50}
                    />


                    <Title style={styles.title}>Tailor Aaditya</Title>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="tune" color={color} size={size} />
                        )}
                        label="Preferences"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="bookmark-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Bookmarks"
                        onPress={() => { }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
                <Image source={require('../assets/timetotravel.jpg')} style={{ width: 270, height: 170, marginTop: 120 }} />
            </View>
        </DrawerContentScrollView>

    );
}

//line 77 {pointerEvents = "none"}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

