import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'

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

export { getAllUsers, addUser } //ES6 notation of module.exports = User