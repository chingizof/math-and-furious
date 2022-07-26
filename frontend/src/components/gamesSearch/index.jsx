import './index.css'
import { Link } from 'react-router-dom'
import { createNewGame } from '../../gameProcess'

export const GamesSearch = () => {
    
// here we request array of games with status "wating"
//later we will represent it on webpage using map
    const handleClick = () => {

    }

    return (
        // games catalogue
        <div className="find-wrapper">
            <div className='games-catalogue'>
                <div className='catalogue-item'>
                    Beknar, Aidar, Nartay, Zhanibek
                    4/5
                </div>
            </div>
        </div>

    )
}