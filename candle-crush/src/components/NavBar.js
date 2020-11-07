import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

    return(
        <div>
            <NavLink to='/candles' >Products</NavLink>
            <NavLink to='/cart'> My Cart</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            
            {props.currentUser ? 
              <button onClick={props.logoutHandler}>Logout</button>
              : 
              <NavLink to='/login'>Login</NavLink>
            }
            
            

        </div>

    )
}

export default NavBar