import React from 'react'

const Signup = (props) => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.signupSubmit}>
                <input type="text" name="username" placeholder="Enter Username" onChange={props.inputHandler} value={props.username}/>
                <input type="text" name="password" placeholder="Enter Password" onChange={props.inputHandler} value={props.password}/>
                <select onChange={props.inputHandler} name="user_type" value={props.user_type}>
                    <option value="basic"> Basic</option>
                    <option value="vendor">Vendor</option>
                </select>
                <button type="submit">Create an Account</button>

            </form>
        </div>
    )

}

export default Signup