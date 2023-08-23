import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UserChat} from '../screens/UserChat';

const AppStack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="UserChat" component={UserChat} />
    </AppStack.Navigator>
  );
}
