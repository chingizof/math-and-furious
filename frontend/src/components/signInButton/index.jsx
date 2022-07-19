import './index.css'
import { Link } from 'react-router-dom'

export const SingInButton = () => {
    return(
        <div className="login">
            <Link to="/login">
                Login
            </Link>
        </div>

    )
}