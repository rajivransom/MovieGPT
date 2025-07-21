// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHTRfh885mFKaZcLeUGkqDpokjkoG4RNM",
  authDomain: "netflixgpt-ff5a8.firebaseapp.com",
  projectId: "netflixgpt-ff5a8",
  storageBucket: "netflixgpt-ff5a8.firebasestorage.app",
  messagingSenderId: "809470501610",
  appId: "1:809470501610:web:9044f995f51931ff742d93",
  measurementId: "G-6565W4ZQ4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth();
