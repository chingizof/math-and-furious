import { AnswerInput } from '../answerInput'
import { Timer } from '../timer'
import { useState } from 'react'
import './index.css'

export const QuestionContainer = ({gameTime, setGameTime, startTime, first, sign, second, answer, score, setScore}) => {
    const [playing, setPlaying] = useState(false)
    console.log("fdgdfgdfg", gameTime)
    return(
        <div className='question-container'>
            {/* TIMER */}
            <Timer playing={playing} setPlaying={setPlaying} startTime={startTime} />
            {/* QUESTION */}
            <div className={`${playing ? 'question-content' : "hidden"}`}>
                <AnswerInput first={first} score={score} setScore={setScore} playing={playing} setPlaying={setPlaying} /> {sign} {second} = {answer}
                {/* Before answer // Input // After Answer */}
                {/* answer input */}
            </div>
        </div>
    )
}