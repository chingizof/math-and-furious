import './index.css'

export const LeaderboardContainer = ({}) => {
    return(
        <div className="wrapper" style={{ backgroundImage: `url(/back.svg)` }}>
            <div className='item-wrapper'>
                <table className='min-w-full leaderboard'>
                    <thead>
                        <tr>
                            <td className='index heading'>Rank</td>
                            <td className='heading'>Name</td>
                            <td className='score heading'>Score</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='index'>#1</td>
                            <td className='name'>Chingiz</td>
                            <td className='score'>Score</td>
                        </tr>
                        <tr>
                            <td className='index'>#2</td>
                            <td>Murat</td>
                            <td className='score'>Score</td>
                        </tr>
                        <tr>
                            <td className='index'>#3</td>
                            <td>Zhanibek</td>
                            <td className='score'>Score</td>
                        </tr>
                        <tr>
                            <td className='index'>#4</td>
                            <td>Aldiyar</td>
                            <td className='score'>Score</td>
                        </tr>
                        <tr>
                            <td className='index'>#5</td>
                            <td>Portabello Marshello</td>
                            <td className='score'>Score</td>
                        </tr>
                        <tr>
                            <td className='index'>#6</td>
                            <td>Fourier Analysis</td>
                            <td className='score'>Score</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}