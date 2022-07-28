import { db, gamesCollection } from './firebase'


import { getDoc, getFirestore, query, getDocs, collection, where, addDoc, doc, onSnapshot, setDoc, updateDoc, arrayUnion, arrayRemove }  from "firebase/firestore";

const max = (a, b) => {
    if (a>b) {
        return a
    }
    return b
}

export const createNewGame = async (gameId, id, name) => {
    let gameRef = doc(db, "games", gameId)

    await setDoc(gameRef, {
        status: "waiting",
        participants: [{id: id, score: 0, name:name}],
        winner: "",
        startTime: 30,
        gameTime: 150
    })

    let time = 30
    let gameTime = 150

    setInterval(() => {
        time = time-1
        gameTime = gameTime - 1
        countdownGo(gameId, time, gameTime)
    }, 1000)

    return gameRef.id
}

export const countdownGo = async(gameId, time, gameTime) => {
        let gameRef = doc(db, 'games', gameId)

        await updateDoc(gameRef,{
            startTime: max(time, 0),
            gameTime: max(gameTime, 0)
        })

        return max(time, 0)
}

export const updateScore = async (score, playerId, gameId, name) => {

        let gameRef = doc(db, "games", gameId)

        console.log("h1")

        await updateDoc(gameRef, {
            participants: arrayUnion({id:playerId,score:score,name:name})
        }).then(updateDoc(gameRef, {
            participants: arrayRemove({id:playerId, score:score-1, name:name})
        }))
}

export const addPlayer = async (playerId, gameId, name) => {
    let gameRef = doc(db, "games", gameId)

    await updateDoc(gameRef,{
        participants: arrayUnion({id:playerId, score:0,name:name})
    })
}

// export const getName = (playerId) => {
//     let userRef = doc(db, users, ) //make users id same as user.uid
// }


export const getScores = async (gameId) => {
    let gameRef = doc(db, 'games', gameId)
    const gameSnap = await getDoc(gameRef)

    return gameSnap.data()
}