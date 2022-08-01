import './index.css'
import { useState, useEffect } from 'react';

export const ScoreboardItem = ({name, score}) => {

    // const [car, setCar] = useState("")

    // useEffect(() => {
    //     let getRandomInt = Math.floor(Math.random() * 2)
    // }, [])


    // if (getRandomInt(2) == 0) {
    //      car = `url(/pixel-art-van.svg)`
    // } else {
    //     car = `url(/car.png)`
    // }
    // console.log(car)

    return(
        <table className="row">
            <tr>
                <td width="90%">
                    <div className='progress-bar'>
                        <div className='avatar' style={{marginLeft: `${score*2/3}%` }}>
                            <div className='name-container'>
                                {name}
                            </div>
                            <div className='avatar-image' style={{ backgroundImage: `url(/car.png)` }} />
                        </div>
                    </div>
                </td>
                <td width="10%">
                    <div className='score-container'>
                        {score}/120
                    </div>
                </td>
            </tr>
        </table>
    )
}