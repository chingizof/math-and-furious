import { QuestionContainer } from '../questionContainer/index.jsx'
import { Scoreboard } from '../scoreboard/index.jsx'
import {questions} from '../data/questions'
import { useState } from 'react'
import './index.css'

export const GameContainer = () => {
    const [score, setScore] = useState(0)

    let generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    let ques

    let generateQuestion = () => {
        ques = questions[generateRandomInteger(questions.length-1)]
    }

    generateQuestion()

    return( 
        <div className='container-wrapper'>
            <div className='container-card'>
                <Scoreboard score={score}/>
                <QuestionContainer first={ques.first} sign={ques.sign} second={ques.second} answer={ques.answer} score={score} setScore={setScore} />
            </div>
        </div>
    )
}