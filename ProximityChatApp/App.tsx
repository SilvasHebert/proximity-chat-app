import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './src/routes';
import {AuthProvider} from './src/contexts/AuthContext';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
