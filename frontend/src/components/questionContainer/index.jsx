import { AnswerInput } from '../answerInput'
import { Timer } from '../timer'
import { useState } from 'react'
import './index.css'

export const QuestionContainer = ({first, sign, second, answer, score, setScore}) => {
    const [playing, setPlaying] = useState(true)

    return(
        <div className='question-container'>
            {/* TIMER */}
            <Timer playing={playing} setPlaying={setPlaying} />
            {/* QUESTION */}
            <div className={`${playing ? 'question-content' : "hidden"}`}>
                <AnswerInput first={first} score={score} setScore={setScore} playing={playing} setPlaying={setPlaying} /> {sign} {second} = {answer}
                {/* Before answer // Input // After Answer */}
                {/* answer input */}
            </div>
        </div>
    )
}



// const firebase = {  

// }

// firebase.getCollection("lobbies").getDocument("1203910239123").players.onUpdate((updatedPlayers) => {
//     updatedPlayers
// })