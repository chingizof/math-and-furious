import { SingInHeader } from '../loginHeader'
import { SingUpHeader } from '../signUpHeader'
import { useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import { SignoutHeader } from '../signoutHeader'
import './index.css'

const token = localStorage.getItem("token");


export const Header = () => {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")==null) {
            setLogged(false)
        } else {
            setLogged(true)
        }
        console.log(typeof(localStorage.getItem("token")))
    }, [token])

    

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
                    <div>
                        <Link to="/whysolve">
                            Why Solve Math?
                        </Link>
                    </div>
                    <div className={`authentification`} >
                        <div className={`signs ${logged ? "hidden" : ""}`}>
                            <SingInHeader />
                            <SingUpHeader />
                        </div>
                        <div className={`logout ${logged ? "" : "hidden"}`} >
                            <SignoutHeader setLogged={setLogged}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}