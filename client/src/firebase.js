// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c65a6.firebaseapp.com",
  projectId: "mern-estate-c65a6",
  storageBucket: "mern-estate-c65a6.appspot.com",
  messagingSenderId: "411454338180",
  appId: "1:411454338180:web:31168ec6f230a1b6013ed1"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);