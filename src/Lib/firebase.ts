import Config from 'react-native-config';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: Config.REACT_APP_API_KEY,
  authDomain: Config.REACT_APP_AUTH_DOMAIN,
  projectId: Config.REACT_APP_PROJECT_ID,
  storageBucket: Config.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: Config.REACT_APP_MESSAGING_ID,
  appId: Config.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
