import { SingInHeader } from '../loginHeader'
import { SingUpHeader } from '../signUpHeader'
import { Link } from 'react-router-dom'
import './index.css'

export const Header = () => {
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
                    <div className='authentification'>
                        <SingInHeader />
                        <SingUpHeader />
                    </div>
                </div>
            </div>
        </nav>
    )

    // return(
    //     <>
    //         <Nav>
    //             <NavMenu>
    //                 <NavLink to="/about" activeStyle>
    //                     About
    //                 </NavLink>
    //                 <NavLink to="/contact" activeStyle>
    //                     Contact Us
    //                 </NavLink>
    //                 <NavLink to="/blogs" activeStyle>
    //                     Blogs
    //                 </NavLink>
    //                 <NavLink to="/sign-up" activeStyle>
    //                     Sign Up
    //                 </NavLink>
    //             </NavMenu>
    //         </Nav>
    //     </>
    // )
}