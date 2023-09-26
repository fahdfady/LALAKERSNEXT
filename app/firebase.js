// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASVLF6rJL4MTYEHyBYMv0bS7WWp-Ht8bA",
    authDomain: "lalakersnext.firebaseapp.com",
    projectId: "lalakersnext",
    storageBucket: "lalakersnext.appspot.com",
    messagingSenderId: "200867820571",
    appId: "1:200867820571:web:fb48268887b11dc404f4be",
    measurementId: "G-SPPGT9P55X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);