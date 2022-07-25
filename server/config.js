import { initializeApp } from 'firebase/app';


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
const auth = getAuth(app)
const usersCollection = collection(db, "users")
const gamesCollection = collection(db, "games")


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

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const createNewGame = async (req) => {
  let game = {
    created: new Date(),
    finished: false,
    participants: [
      {
        uid: req.body.uid,
        score: 0
      },
    ]
  }

  try {
    const newGame = await addDoc(gamesCollection, game);
    console.log("Game created with ID:", newGame.id);
  } catch(e) {
    console.log(e)
  }
}

const unsub = onSnapshot(
  doc(db, "cities", "SF"), 
  { includeMetadataChanges: true }, 
  (doc) => {
    // console.log(doc)
    // addUser(doc)
  });

const q = query(usersCollection, where("email", "==", "chingizof@mail.ru"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const passwords = [];
  querySnapshot.forEach((doc) => {
      passwords.push(doc.data().name);
  });
  console.log("current players with chingizof@email: ", passwords.join(", "));
});



export { getAllUsers, addUser, registerWithEmailAndPassword, logInWithEmailAndPassword, sendPasswordReset, logout, createNewGame } //ES6 notation of module.exports = User


//сохрать айди в локал сторадж 
    // роуты слушают локал сторадж, проверяют есть ли там айди
    // если есть, совпадает ли он с тем что есть в базе
    //тогда будет знать что показывать



//создается структура игра со свойством participants, при изменении player обновляю скор

//player имеет score который обновляется//