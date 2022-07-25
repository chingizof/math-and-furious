import { initializeApp } from "firebase/app"
import { getFirestore, query, getDocs, collection, where, addDoc, doc, onSnapshot}  from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";


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

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const usersCollection = collection(db, "users")
const gamesCollection = collection(db, "games")
const auth = getAuth(app)






export { db, usersCollection, gamesCollection, auth }