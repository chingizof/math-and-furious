import './index.css'
import { ScoreboardItem } from '../scoreboardItem/index.jsx'
import { getScores } from '../../gameProcess'
import { useState } from 'react'
import { useEffect } from 'react'

//получаю массив игроков, на каждый индекс создаю scoreboard item
//в scoreboard item передаю player id, name, score

//обновлять данные каждую секунду

export const Scoreboard = ({score, setStartTime, setGameTime}) => {

    const gameId = localStorage.getItem("gameId")
    const [scores, setScores] = useState([])
    const [myInterval, setMyInterval] = useState(null);

    function lalala () {
        let bro = updateData();

        bro.then(r => {
            setScores(r.participants)
            setStartTime(r.startTime)
            // setGameTime(r.gameTime)
        })
    }

    // useEffect(() => {
    //     lalala()
    // }, [])

    useEffect( () => {
        let interval = setInterval(() => {
            lalala()
        },1000)
        setMyInterval(interval);

        return () => {
            clearInterval(myInterval)
        } // component will unmount;
    },[])

    // setInterval(() => {
    //     setScores(updateData())
    // },1000)

    const updateData = async () => {
        // get values of other players
        const newScores = await getScores(gameId)
        // setScores(newScores)
        // console.log(scores)
        return newScores;
    }

    // const waiting = async() => {

    // }


    return(
        <div className='scoreboard'>
            {scores?.map((score) => (
                <ScoreboardItem name={score.name} score={score.score} />
            ))}
                {/* <ScoreboardItem name="Murat" score={score} />
                <ScoreboardItem name="Beknar" score="49" />
                <ScoreboardItem name="Aidar" score="58" />
                <ScoreboardItem name="Zhanibek" score="19" />
                <ScoreboardItem name="Nartay" score="120" /> */}
        </div>
    )
}