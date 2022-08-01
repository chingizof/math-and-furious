import './index.css'
import { logout } from '../../signOut'
import { useNavigate } from "react-router-dom"

export const SignoutHeader = ({setLogged}) => {
    const navigate = useNavigate();
    const logoutFront = async () => {
        console.log('clicked')
        localStorage.removeItem("token")
        setLogged(false)
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