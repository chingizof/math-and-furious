import './index.css'

export const ScoreboardItem = ({name, score}) => {
    return(
        <table className="row">
            <tr>
                <td width="90%">
                    <div className='progress-bar'>
                        <div className='avatar' style={{marginLeft: `${score*2/3}%` }}>
                            <div className='name-container'>
                                {name}
                            </div>
                            <div className='avatar-image' style={{backgroundImage: "url('https://flyclipart.com/thumb2/pixel-art-car-icons-png-155992.png')"}}>
                                {/* <img src="https://data.typeracer.com/public/images/avatars/mobil3.svg" alt="" /> */}
                            </div>
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