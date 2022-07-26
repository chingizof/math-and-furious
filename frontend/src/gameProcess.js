import { db, gamesCollection } from './firebase'
import { collection, addDoc, setDoc, updateDoc, arrayUnion, arrayRemove, FieldPath} from "firebase/firestore"; 

export const updateScore = async (score, playerId, gameId) => {
    try {
        console.log("hi")

        const game = await db.collection("games").where(FieldPath.documentId() == gameId)

        console.log('hi2')

        await game.update({
            participants: [{
                id: playerId,
                score: score
            }]
        })
    } catch (e) {
        console.log(e)
    } 

    // db.collection("games").doc("frank").update({
    //     participants: [{
    //     id: playerId,
    //     score: 49
    //     }]
    // }).then(function() {
    //     console.log("Frank food updated");
    // });
}

export const createNewGame = async (id) => {
    let gameRef = await addDoc(gamesCollection, {
        status: "waiting",
        participants: [{id: id, score: 0}],
        winner: "",
    })

    return gameRef.id
}

// export const addPlayer = async (gameref, id) => {
//     await updateDoc(gameRef, {
//         participants: arrayUnion({id: id, score: 0})
//     })
// }