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
                            <td 
                            className='name'>Chingiz
                            <div className='car-image' style={{ backgroundImage: `url(/car.png)` }} /></td>
                            <td className='score'>118</td>
                        </tr>
                        <tr>
                            <td className='index'>#2</td>
                            <td className='daun'>
                                Murat
                                <div className='car-image' style={{ backgroundImage: `url(/car.png)` }} />
                            </td>
                            <td className='score'>98</td>
                        </tr>
                        <tr>
                            <td className='index'>#3</td>
                            <td>
                                Zhanibek
                                <div className='car-image' style={{ backgroundImage: `url(/car.png)` }} />
                            </td>
                            <td className='score'>78</td>
                        </tr>
                        <tr>
                            <td className='index'>#4</td>
                            <td>
                                Aldiyar
                                <div className='car-image' style={{ backgroundImage: `url(/car.png)` }} />
                            </td>
                            <td className='score'>64</td>
                        </tr>
                        <tr>
                            <td className='index'>#5</td>
                            <td>
                                Portabello Marshmello
                                <div className='car-image' style={{ backgroundImage: `url(/car.png)` }} />
                            </td>
                            <td className='score'>44</td>
                        </tr>
                        <tr>
                            <td className='index'>#6</td>
                            <td>
                                Fourier Analysis
                                <div className='car-image' style={{ backgroundImage: `url(/car.png)` }} />
                            </td>
                            <td className='score'>23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}