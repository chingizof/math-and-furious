import gamesCollection from './firebase'
import { getDocs }  from "firebase/firestore";

const getAllGames = async () => {
    const response = await getDocs(gamesCollection);
    return response
  }