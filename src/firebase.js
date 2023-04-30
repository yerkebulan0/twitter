// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/database';
import 'fs/promises'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIFM8dkNPktXDEaeszNobEdZ9FrYnfehU",
  authDomain: "twitter-app-e154e.firebaseapp.com",
  projectId: "twitter-app-e154e",
  storageBucket: "twitter-app-e154e.appspot.com",
  messagingSenderId: "991947599839",
  appId: "1:991947599839:web:0c2b1b90652db080fbde6a",
  measurementId: "G-P69XDXV9TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
export default db;