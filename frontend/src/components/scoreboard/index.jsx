import './index.css'
import { ScoreboardItem } from '../scoreboardItem/index.jsx'
import { getScores } from '../../gameProcess'
import { useState } from 'react'
import { useEffect } from 'react'

//receive array of players, for each index create scoreboard item
//in scoreboard item provide (player id, name, score)

//update data each second

export const Scoreboard = ({score, setStartTime, setGameTime}) => {

    const gameId = localStorage.getItem("gameId")
    const [scores, setScores] = useState([])
    const [myInterval, setMyInterval] = useState(null);

    function updScore () {
        let itemScore = updateData();

        itemScore.then(r => {
            setScores(r.participants)
            setStartTime(r.startTime)
            // setGameTime(r.gameTime)
        })
    }

    // useEffect(() => {
    //     updScore()
    // }, [])

    useEffect(() => {
        let interval = setInterval(() => {
            updScore()
        },1000)
        setMyInterval(interval);

        return () => {
            clearInterval(myInterval)
        } // component will unmount;
    },[])

    const updateData = async () => {
        // get values of other players
        const newScores = await getScores(gameId)
        return newScores;
    }

    return(
        <div className='scoreboard'>
            {scores?.map((score) => (
                <ScoreboardItem name={score.name} score={score.score} />
            ))}
        </div>
    )
}
