import {collection, addDoc } from 'firebase/firestore'
import { usersCollection, auth } from './firebase.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Successsssss")
    } catch (err) {
      console.error(err);
    }
  };