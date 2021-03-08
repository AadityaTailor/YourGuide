
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import About from '../components/about'
import { DrawerContent } from '../components/drawerContent'

const Drawer = createDrawerNavigator();
// #c6cbef
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerContent />}
            drawerStyle={{
                backgroundColor: '#fff',
            }}
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 },
            }}

        >
            <Drawer.Screen name="Traveling" component={TabNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator