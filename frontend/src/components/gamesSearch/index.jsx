import './index.css'
import { Link } from 'react-router-dom'
import { createNewGame } from '../../gameProcess'
import { useNavigate } from 'react-router-dom'

export const GamesSearch = () => {
    
// here we request array of games with status "wating"
//later we will represent it on webpage using map
    const navigate = useNavigate()
    const handleClick = async () => {
        const id = localStorage.getItem("token")
        console.log(id)
        const gameId = await createNewGame(id)
        localStorage.setItem("gameId", gameId)
        console.log(gameId)
        navigate('/game')
    }

    return (
        // games catalogue
        <div className="find-wrapper">
            <div className='games-catalogue'>
                <div className='catalogue-item'>
                    Beknar, Aidar, Nartay, Zhanibek
                    4/5
                    <div className="start-game" onClick={handleClick}>
                            Start Now!
                    </div>
                </div>
            </div>
        </div>

    )
}