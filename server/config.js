import { initializeApp } from 'firebase/app';


import { getFirestore, query, getDocs, collection, where, addDoc}  from "firebase/firestore";

import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";


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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const usersCollection = collection(db, "Users")


const getAllUsers = async () => {
  const response = await getDocs(usersCollection);
  return response
}

const addUser = async (body) => {
  try {
    const newUser = await addDoc(usersCollection, body);
    console.log("User created with ID:", newUser.id);
  } catch (e) {
    console.error("Error creating user: ", e);
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


export { getAllUsers, addUser } //ES6 notation of module.exports = User