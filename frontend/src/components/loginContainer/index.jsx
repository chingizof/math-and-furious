import axios from 'axios'
import './index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logInWithEmailAndPassword } from '../../loginUser'

export const LoginContainer = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()
        console.log(email, password)
        logInWithEmailAndPassword(email, password)
    }

    return (
        <div className='login-wrapper'>
            <div className='login-image'>
                <img src="" alt="" />
            </div>
            <div className="login-container">
                <div className='login-header'>
                    <h1>Login to Portal</h1>
                </div>
                <div className='login-form'>
                    <form>
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