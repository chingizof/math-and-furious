import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRq4ICuiJutH3Z_A3-JPMFAIinCeiT_kI",
    authDomain: "math-and-furious.firebaseapp.com",
    databaseURL: "https://math-and-furious-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "math-and-furious",
    storageBucket: "math-and-furious.appspot.com",
    messagingSenderId: "189062568084",
    appId: "1:189062568084:web:44a974be347aae484dbc81",
    measurementId: "G-6M856T54EX"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const User = db.collection("Users")

export default User //ES6 notation of module.exports = User