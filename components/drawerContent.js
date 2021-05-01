import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Switch,
    TouchableRipple,
    Card
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TouchableHighlight } from 'react-native-gesture-handler';

const Item = ({ title }) => (
    <View>

        <TouchableOpacity>
            <Card style={{ borderRadius: 4, borderWidth: 1, margin: 2 }}>
                <Text style={{ marginLeft: 30, marginBottom: 5, marginTop: 5 }}>{title}</Text>
            </Card>
        </TouchableOpacity>

    </View>
);


export function DrawerContent(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);
    const item = [
        {
            id: '1',
            title: ' Arial',
        },
        {
            id: '2',
            title: 'Verdana',
        },
        {
            id: '3',
            title: 'Helvetica',
        },
        {
            id: '4',
            title: 'Futura',
        },
        {
            id: '5',
            title: 'Calibri',
        },
        {
            id: '6',
            title: 'Century Gothic',
        }
    ];
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

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
                <Drawer.Section title="Preferences">
                    <Drawer.Section title="Select Font">


                        <FlatList
                            data={item}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />

                    </Drawer.Section>

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
                <Image source={require('../assets/timetotravel.jpg')} style={{ width: 270, height: 165 }} />
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
        flex: 1,
        flexDirection: "row",
        paddingLeft: 20,
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
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

