import { SingInHeader } from '../loginHeader'
import { SingUpHeader } from '../signUpHeader'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SignoutHeader } from '../signoutHeader'
import './index.css'

export const Header = () => {
    const [logged, setLogged] = useState()

    // if(typeof(localStorage.getItem("token"))!='undefined'){
    //     setLogged(true)
    // }   <---- this results in infinite render

    useEffect(() => {
        if (typeof(localStorage.getItem("token"))==undefined) {
            setLogged(false)
        } else {
            setLogged(true)
        }
    }, [localStorage.getItem("token")])

    return(
        <nav>
            <div className='header-wrapper'>
                <div className='header-content'>
                    <Link to="/">
                        <div className='logo'>
                        </div>
                    </Link>
                    <div>
                        <Link to="/find-games">
                            Find New Game
                        </Link>
                    </div>
                    <div>
                        <Link to="/leaderboard">
                            Leaderboards
                        </Link>
                    </div>
                    <div className={`authentification`} >
                        <div className={`${logged ? "hidden" : ""}`}>
                            <SingInHeader />
                            <SingUpHeader />
                        </div>
                        <div className={`logout ${logged ? "" : "hidden"}`} >
                            <SignoutHeader/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}