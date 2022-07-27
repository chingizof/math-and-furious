import { db, gamesCollection } from './firebase'


import { getDoc, getFirestore, query, getDocs, collection, where, addDoc, doc, onSnapshot, setDoc, updateDoc }  from "firebase/firestore";


export const createNewGame = async (id) => {
    let gameRef = doc(db, "games", id)
    console.log("hh")

    await setDoc(gameRef, {
        status: "waiting",
        participants: [{id: id, score: 0}],
        winner: "",
    })
    console.log("hh")
    return gameRef.id
}

export const updateScore = async (score, playerId, gameId) => {

        let gameRef = doc(db, "games", playerId)

        console.log("h1")

        await updateDoc(gameRef, {
            participants: [{
                id: playerId,
                score:score
            }]
        })
}