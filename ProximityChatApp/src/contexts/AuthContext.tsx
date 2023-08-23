import React, {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
// import firestore from '@react-native-firebase/firestore';

type authState = {
  authenticated: boolean;
  currentUser: any;
};

type User = {
  uid: string;
  name: string;
};

type AuthProps = {
  user: User | null;
  authState?: authState | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  createAccount: (email: string, password: string) => void;
};

const AuthContext = createContext<AuthProps>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  createAccount: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<authState | null>(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (currentUser: any) => {
    if (!currentUser) {
      setAuthState({
        authenticated: false,
        currentUser: currentUser,
      });
      setUser(null);
    } else {
      setAuthState({
        authenticated: true,
        currentUser: currentUser,
      });

      // firestore()
      //   .collection('users')
      //   .doc(currentUser.uid)
      //   .get()
      //   .then(response => {
      //     setUser(response?._data);
      //   });
    }
  };

  const signIn = (email: string, password: string) => {
    if (!email || !password) {
      return;
    }
    console.log(email, password);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('', error.message);
      });
  };

  const signOut = () => {
    auth().signOut();
  };

  const createAccount = (email: string, password: string) => {
    if (!email || !password) {
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('', error.message);
      });
  };

  const value = {
    user: user,
    authState: authState,
    signIn: signIn,
    signOut: signOut,
    createAccount: createAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
