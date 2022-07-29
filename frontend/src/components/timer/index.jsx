import './index.css'
import { useState, useEffect } from 'react';
import { getScores } from '../../gameProcess'

export const Timer = ({ playing, setPlaying, startTime }) => {
    const gameId = localStorage.getItem("gameId")
    const [gameTime, setGameTime] = useState(150);
    const [myInterval, setMyInterval] = useState(null);
    console.log('gameYime', gameTime)
    function lalala () {
        let bro = updateData();
        console.log('dfgdfgdfg', bro)
        bro.then(r => {
            console.log('dsfsdfsdfd', r.gameTime)
            setGameTime(r.gameTime)
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

    if (startTime == 0) {
        setPlaying(true)
    }

    if (gameTime == 0) {
        setPlaying(false)
    }

    // window.addEventListener('load', timer);

    return(
        <div id='timerDisplay' className={"timer-display"} >{gameTime}</div>
    )
}