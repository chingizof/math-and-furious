import './index.css'
import { useState } from 'react'
import { registerWithEmailAndPassword } from '../../registerUser'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from "react-router-dom"


export const SignUpContainer = () => {
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault();
        try{
            // console.log("button")
            let uid = await registerWithEmailAndPassword(login, email, password)
            if (uid) {
                localStorage.setItem("token", uid)
                navigate("/")
            }
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div className='signup-wrapper'>
            <div className='signup-image' style={{backgroundImage:`url('/furious-modified.jpeg')`}} />
            <div className="signup-container">
                <div className='sign-up-header'>
                    <h1>Sign Up to Portal</h1>
                </div>
                <div className='signup-form'>
                    <form>
                        <label>Username</label>
                        <input id="login" className='form-control' required type="text"  value={login} onChange={(e) => setLogin(e.target.value)} />
                        <label>Email address</label>
                        <input id="email" className='form-control' required type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Password </label>
                        <input id="pass" className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className='btn btn-signup' required onClick={register}>Sign Up</button>
                        <div>
                            Already have an account? <Link to="/login">Login</Link> now.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}