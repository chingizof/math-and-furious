import './index.css'
import { Link } from 'react-router-dom'
import { createNewGame, addPlayer } from '../../gameProcess'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

export const GamesSearch = () => {
    
// here we request array of games with status "wating"
//later we will represent it on webpage using map
    const navigate = useNavigate()

    const newGame = async () => {
        const playerId = localStorage.getItem("token")
        const gameId = uuid()

        const name = localStorage.getItem("name")
        createNewGame(gameId, playerId, name)
        localStorage.setItem("gameId", gameId)

        navigate(`/game/${gameId}`)
    }

    const findGame = async () => {
        console.log('hi')
        const gameId = document.getElementById('game-search').value
        console.log(gameId)
        const playerId = localStorage.getItem("token")
        const name = localStorage.getItem("name")
        await localStorage.setItem("gameId", gameId)

        await addPlayer(playerId, gameId, name)

        navigate(`/game/${gameId}`)
    }

    return (
        // games catalogue
        <div className="find-wrapper" style={{ backgroundImage: `url(/back.svg)` }}>
            <div className='games-catalogue'>
                <div className='game-text'>
                    Use ID to enter existing game
                    <input id="game-search" />
                    <button id="search-button" onClick={findGame}>Find</button>
                </div>
                <div className="start-game" onClick={newGame}>
                    Create new game!
                </div>
            </div>
        </div>

    )
}