import './index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logInWithEmailAndPassword } from '../../loginUser'
import { Navigate, useNavigate } from "react-router-dom"

export const LoginContainer = () => {
    const [name, setName] = useState ("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        console.log(email, password)
        let uid = await logInWithEmailAndPassword(email, password)
        if (uid) {
            localStorage.setItem("token", uid)
            localStorage.setItem("name", name)
            navigate('/')
        }
    }

    return (
        <div className='login-wrapper'>
            <div className='login-image' style={{backgroundImage:`url('/furious-modified.jpeg')`}} />  
            <div className="login-container">
                <div className='login-header'>
                    <h1>Login to Portal</h1>
                </div>
                <div className='login-form'>
                    <form>
                        <label>Username</label>
                        <input id="login" className='form-control' required type="text"  value={login} onChange={(e) => setName(e.target.value)} />
                        <label>Email address</label>
                        <input id="email" className='form-control' required type="text" onChange={(e) => setEmail(e.target.value)}/>
                        <label>Password </label>
                        <input id="pass" className='form-control' type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <div className='reset-password'>Reset Password</div>
                        <button className='btn btn-primary' required onClick={login}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}