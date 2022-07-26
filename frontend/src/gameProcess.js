import { db, gamesCollection } from './firebase'
import { collection, addDoc, setDoc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore"; 

export const updateScore = (score, playerId) => {
    db.collection("games").doc("frank").update({
        participants: [{
        id: playerId,
        score: 49
        }]
    }).then(function() {
        console.log("Frank food updated");
    });
}

export const createNewGame = async (id) => {
    let gameRef = await addDoc(gamesCollection, {
        status: "waiting",
        participants: [{id: id, score: 0}],
        winner: "",
    })
}

export const addPlayer = async (gameref, id) => {
    await updateDoc(gameRef, {
        participants: arrayUnion({id: id, score: 0})
    })
}