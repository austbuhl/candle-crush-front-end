import React from 'react'

const Login = (props) => {
    return (
        <div>
            <form onSubmit={props.loginSubmit}>
                <input type="text" name="username" placeholder="Enter Username" onChange={props.loginInputHandler} value={props.username}/>
                <input type="text" name="password" placeholder="Enter Password" onChange={props.loginInputHandler} value={props.password}/>
                <button type="submit">Login</button>

            </form>
        </div>
    )

}

export default Login