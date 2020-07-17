import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Peoples } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactPeoples = createStackNavigator();
export default function PeoplesStack() {
  return (
    <StactPeoples.Navigator initialRouteName="Peoples">
      <StactPeoples.Screen name="Peoples" component={Peoples} options={navOptionHandler} />
    </StactPeoples.Navigator>
  )
}