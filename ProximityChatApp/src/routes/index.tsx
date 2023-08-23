import React from 'react';

import {useAuth} from '../contexts/AuthContext';
import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';

export function Routes() {
  const {authState} = useAuth();

  if (authState?.authenticated) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
}
