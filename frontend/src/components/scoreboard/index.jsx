import './index.css'
import { ScoreboardItem } from '../scoreboardItem/index.jsx'

export const Scoreboard = () => {
    return(
        <div className='scoreboard'>
                <ScoreboardItem name="Murat" score="39" />
                <ScoreboardItem name="Beknar" score="49" />
                <ScoreboardItem name="Aidar" score="58" />
                <ScoreboardItem name="Zhanibek" score="19" />
                <ScoreboardItem name="Nartay" score="120" />
        </div>
    )
}