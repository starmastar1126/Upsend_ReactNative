import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Open, Snoozed, Closed } from '@screens';
import { Header } from '@components';

const TopTab = createMaterialTopTabNavigator();
export default function TopTabNavigator() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <TopTab.Screen name="Open" component={Open}/>
      <TopTab.Screen name="Snoozed" component={Snoozed} />
      <TopTab.Screen name="Closed" component={Closed} />
    </TopTab.Navigator>
  );
}