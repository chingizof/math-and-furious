import { AnswerInput } from '../answerInput'
import './index.css'

export const QuestionContainer = ({first, sign, second, answer, score, setScore}) => {
    // let generateQuestion = (ques) => {
    //     let inputedNumber = 1
    //     console.log(inputedNumber)
    //     if (inputedNumber === 1) {
    //         return `Input ${ques['sign']} ${ques['second']} = ${ques['answer']}`
    //     } else if (inputedNumber === 2) {
    //         return `${ques['first']} ${ques['sign']} Input = ${ques['answer']}`
    //     } else {
    //         return `${ques['first']} ${ques['sign']} ${ques['second']} = Input`
    //     }
    // }

    // generateQuestion()


    return(
        <div className='question-container'>
            {/* TIMER */}
            {/* QUESTION */}
            <div className='question-content'>
                <AnswerInput first={first} score={score} setScore={setScore}/> {sign} {second} = {answer}
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