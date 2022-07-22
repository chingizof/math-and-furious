import axios from 'axios'
import './index.css'

export const LoginContainer = () => {

    const handleClick = async () => {
        let password = document.getElementById("pass").value
        let email = document.getElementById("email").value

        let result = await axios.post("http://localhost:4000/login", { password: password, email: email})
        console.log(result)
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