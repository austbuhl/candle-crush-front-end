import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return(
        <div>
            <NavLink to='/candles' >Products</NavLink>
            <NavLink to='/cart'> My Cart</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/login'> Login</NavLink>
            <NavLink to='/logout'> Logout</NavLink>
        </div>
        
    )
}

export default NavBar