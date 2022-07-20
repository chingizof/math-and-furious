import './index.css'
import { Link } from 'react-router-dom'

export const SingInHeader = () => {
    return(
        <div className="login">
            <Link to="/login">
                Login
            </Link>
        </div>

    )
}