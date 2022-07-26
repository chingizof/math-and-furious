import {collection, addDoc } from 'firebase/firestore'
import { usersCollection, auth } from './firebase.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user
      return user.uid
      console.log("Successsssss")
    } catch (err) {
      console.error(err);
    }
  };