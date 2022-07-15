import { SingInButton } from '../signInButton'
import { SingUpButton } from '../signUpButton'
import './index.css'

export const Header = () => {
    return(
        <div className='header-wrapper'>
            <div className='header-content'>
                <div className='logo'>Logo</div>
                <div>Find New Game</div>
                <div>Leaderboards</div>
                <div className='authentification'>
                    <SingInButton />
                    <SingUpButton />
                </div>
            </div>
        </div>
    )
}