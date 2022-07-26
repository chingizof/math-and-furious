import {collection, addDoc } from 'firebase/firestore'
import { usersCollection, auth } from './firebase.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";



// export const registerUser = async (body) => {
//     try {
//       const newUser = await addDoc(usersCollection, body);
//       console.log("User created with ID:", newUser.id);
//     } catch (e) {
//       console.error("Error creating user: ", e);
//     }
//   }

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
    console.log("1", name, email,password)
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res)
      const user = res.user;
      await addDoc(usersCollection, {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      return user.uid
    } catch (err) {
      console.error(err);
    }
  };