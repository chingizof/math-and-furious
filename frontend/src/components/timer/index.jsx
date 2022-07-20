import './index.css'

export const Timer = ({ playing, setPlaying }) => {
    function timer(){
        var sec = 120;
        var timer = setInterval(function(){
            document.getElementById('timerDisplay').innerHTML = sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                document.getElementById('timerDisplay').innerHTML = "";
                setPlaying(false)
            }
        }, 1000);
    }

    window.addEventListener('load', timer);

    return(
        <div id='timerDisplay' className={`${playing ? "timer-display" : "hidden"}`} >120</div>
    )
}