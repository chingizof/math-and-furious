import './index.css'
import { logout } from '../../signOut'
import { Navigate, useNavigate } from "react-router-dom"

export const SignoutHeader = () => {
    const navigate = useNavigate();
    const logoutFront = async () => {
        console.log('clicked')
        localStorage.removeItem("token")
        await logout()
        navigate("/")
        // return <Navigate replace to="/home" />
    }
    

    return (
        // <div className='signout-wrapper'>
            <div className='sign-out' onClick={logoutFront}>
                Sign Out
            </div>
        // </div>
    )
}