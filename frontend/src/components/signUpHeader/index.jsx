import './index.css'
import { Link } from 'react-router-dom'

export const SingUpHeader = () => {
    return(
        <div className="sign-up">
            <Link to="/sign-up">
                Sign Up
            </Link>
        </div>
    )
}