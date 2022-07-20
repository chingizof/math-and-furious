import './index.css'

export const LoginContainer = () => {

    const handleClick = () => {

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
                        <label>Username or Email address</label>
                        <input id="login" className='form-control' required type="text" />
                        <label>Password </label>
                        <input id="pass" className='form-control' type="password" />
                        <button className='btn btn-primary' required onClick={handleClick}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}