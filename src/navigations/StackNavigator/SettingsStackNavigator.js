import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Settings, Logout } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactSettings = createStackNavigator();
export default function SettingsStack() {
  return (
    <StactSettings.Navigator initialRouteName="Settings">
      <StactSettings.Screen name="Settings" component={Settings} options={navOptionHandler} />
      <StactSettings.Screen name="Logout" component={Logout} options={navOptionHandler} />
    </StactSettings.Navigator>
  )
}