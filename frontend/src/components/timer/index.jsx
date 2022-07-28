import './index.css'

export const Timer = ({ gameTime, playing, setPlaying, startTime }) => {

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