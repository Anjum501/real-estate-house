// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };


const firebaseConfig = {
    apiKey: "AIzaSyBco3AqEtSklI7YZ-WyrKHXgQ2IKj68O30",
    authDomain: "real-estate-c4bbf.firebaseapp.com",
    projectId: "real-estate-c4bbf",
    storageBucket: "real-estate-c4bbf.appspot.com",
    messagingSenderId: "542307931930",
    appId: "1:542307931930:web:e77e2485ba6ca3f8bc7ea3",
    measurementId: "G-K7XD0FFZQ8"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Auth object
export const auth = getAuth(app);

// Export the app in case you need it elsewhere in your project
export default app;
