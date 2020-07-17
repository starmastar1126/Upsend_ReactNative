import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Message } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactHome = createStackNavigator();
export default function SettingsStack() {
  return (
    <StactHome.Navigator initialRouteName="Home">
      <StactHome.Screen name="Home" component={Home} options={navOptionHandler} />
      {/* <StactHome.Screen name="Message" component={Message} options={navOptionHandler} /> */}
    </StactHome.Navigator>
  )
}