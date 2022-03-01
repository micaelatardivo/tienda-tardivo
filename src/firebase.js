// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGmxk_THZEVq91X799dmygbYyuc4KOW44",
  authDomain: "cuarto-set.firebaseapp.com",
  projectId: "cuarto-set",
  storageBucket: "cuarto-set.appspot.com",
  messagingSenderId: "476433050934",
  appId: "1:476433050934:web:143fa209edd4b9d89a1797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);