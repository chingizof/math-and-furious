import './index.css'
import { Link } from 'react-router-dom'
import { Footer } from '../footer'

export const HomeDescription = () => {

    return(
        <div className="wrapper" style={{ backgroundImage: `url(/back.svg)` }}>
            <div className="container">
                <div className='container-description'>
                    <h1 className='container-text'>Start playing Fast & Furious: develop your mental math skills and have fun together</h1>
                    {/* start playing button  */}
                    <div className="play-now">
                        <Link to="/game">
                            Start Now!
                        </Link>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}