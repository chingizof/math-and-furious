import axios from 'axios'
import './index.css'

export const SignUpContainer = () => {

    const handleClick = () => {
        let login = document.getElementById("login").value
        let password = document.getElementById("pass").value
        let email = document.getElementById("email").value
        // 
        axios.post("http://localhost:4000/register", { email: email, name: login, password: password })
    }

    return(
        <div className='signup-wrapper'>
            <div className='signup-image'>
                <img src="" alt="" />
            </div>
            <div className="signup-container">
                <div className='sign-up-header'>
                    <h1>Sign Up to Portal</h1>
                </div>
                <div className='signup-form'>
                    <form>
                        <label>Username</label>
                        <input id="login" className='form-control' required type="text" />
                        <label>Email address</label>
                        <input id="email" className='form-control' required type="text" />
                        <label>Password </label>
                        <input id="pass" className='form-control' type="password" />
                        <button className='btn btn-primary' required onClick={handleClick}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}