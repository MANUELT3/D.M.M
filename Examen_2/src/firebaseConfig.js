import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
const firebaseConfig = {

    apiKey: "AIzaSyCL_ShWRNrMKUluj1stQ2zUaUQLZ9Lewzg",
  
    authDomain: "logexam-6b826.firebaseapp.com",
  
    projectId: "logexam-6b826",
  
    storageBucket: "logexam-6b826.appspot.com",
  
    messagingSenderId: "343818170886",
  
    appId: "1:343818170886:web:ce82672b1ef6e3e8fec987"
  
  };
  
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };