import { updateScore } from '../../gameProcess'
import './index.css'

export const AnswerInput = ({first, score, setScore, playing, setPlaying}) => {
    let handleChange = async () => {
        var val = document.getElementById('question-input').value
        if (parseInt(val)===first){
            console.log('congrats')
            setScore(score+1)
            document.getElementById('question-input').value = ""
            // change score in database
            const playerId = localStorage.getItem("token")
            const gameId = localStorage.getItem("gameId")

            await updateScore(score, playerId, gameId)
        }
    }

    window.onload = function() {
        document.getElementById("question-input").focus();
    }

    return(
        <input
        id="question-input"
        onChange={handleChange} />
    )
}