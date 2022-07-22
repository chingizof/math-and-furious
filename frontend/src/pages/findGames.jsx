import axios from "axios"
import { Link } from "react-router-dom"


export const FindGamesPage = () => {
    const handleClick = async () => {
        await axios.post('http://localhost:4000/new-game', {"uid":"1"})
    }
    return (
        // games catalogue
        <div className="find-wrapper">
            <div className="find-button" onClick={handleClick}>
                        <Link to="/game">
                            Find New Game
                        </Link>
                </div>
        </div>

    )
}