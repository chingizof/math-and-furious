import { QuestionContainer } from '../questionContainer/index.jsx'
import { Scoreboard } from '../scoreboard/index.jsx'
import {questions} from '../data/questions'
import { useState } from 'react'
import './index.css'

export const GameContainer = () => {
    const [score, setScore] = useState(0)
    const [startTime, setStartTime] = useState(0)
    // const [gameTime, setGameTime] = useState(150)

    let generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    let ques

    let generateQuestion = () => {
        ques = questions[generateRandomInteger(questions.length-1)]
    }

    generateQuestion()


    return( 
        <div className='container-wrapper' style={{ backgroundImage: 'url("https://i.pinimg.com/736x/01/fe/06/01fe067cc51a9134490450994a89f1e2--astrology-aesthetics.jpg")'}}>
            <div className='container-card'>
                <Scoreboard score={score} setStartTime={setStartTime}  />
                <QuestionContainer  startTime={startTime} first={ques.first} sign={ques.sign} second={ques.second} answer={ques.answer} score={score} setScore={setScore} />
            </div>
        </div>
    )
}