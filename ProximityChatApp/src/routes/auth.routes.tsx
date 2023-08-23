import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthStackProps = NativeStackNavigationProp<AuthStackParamList>;

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}
