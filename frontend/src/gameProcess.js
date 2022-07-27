import { db, gamesCollection } from './firebase'


import { getDoc, getFirestore, query, getDocs, collection, where, addDoc, doc, onSnapshot, setDoc, updateDoc, arrayUnion }  from "firebase/firestore";


export const createNewGame = async (gameId, id) => {
    let gameRef = doc(db, "games", gameId)
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

        let gameRef = doc(db, "games", gameId)

        console.log("h1")

        await updateDoc(gameRef, {
            participants: [{
                id: playerId,
                score:score
            }]
        })
}

export const addPlayer = async (playerId, gameId) => {
    let gameRef = doc(db, "games", gameId)

    await updateDoc(gameRef,{
        participants: arrayUnion({id:playerId, score:0})
    })
}

// export const getName = (playerId) => {
//     let userRef = doc(db, users, ) //make users id same as user.uid
// }