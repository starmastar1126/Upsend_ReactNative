import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from '@navigations/TabNavigator/BottomTabNavigator';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Tap" >
            <Drawer.Screen name="Tab" component={BottomTabNavigator} />
        </Drawer.Navigator>
    )
}