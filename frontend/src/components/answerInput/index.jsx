import './index.css'

export const AnswerInput = ({first, score, setScore}) => {
    let handleChange = () => {
        var val = document.getElementById('question-input').value
        if (parseInt(val)===first){
            console.log('congrats')
            setScore(score+1)
            document.getElementById('question-input').value = ""
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