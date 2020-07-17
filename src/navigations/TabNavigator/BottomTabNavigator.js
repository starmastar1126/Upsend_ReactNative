import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import PeoplesStack from '@navigations/StackNavigator/PeoplesStackNavigator';
import HomeStack from '@navigations/StackNavigator/HomeStackNavigator';
import SettingsStack from '@navigations/StackNavigator/SettingsStackNavigator';

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType, iconColor;
          if (route.name === 'Peoples') {
            iconColor = focused ? '#000' : '#999';
            iconName = 'user-friends';
            iconType = 'font-awesome-5';
          } else if (route.name === 'Settings') {
            iconColor = focused ? '#000' : '#999';
            iconName = 'settings';
            iconType = 'feather';
          } else {
            iconColor = focused ? '#000' : '#999';
            iconName = 'chat';
            iconType = 'entypo';
          }

          return <Icon type={iconType} name={iconName} size={22} color={iconColor} style={{marginTop: 10}} />;
        },
        tabBarLabel: ''
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen name="Peoples" component={PeoplesStack} />
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Settings" component={SettingsStack} />
    </BottomTab.Navigator>
  );
}