import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

    return(
        <div>
            <NavLink to='/candles' >Products</NavLink>
            <NavLink to='/cart'> My Cart</NavLink>
            <NavLink to='/profile'> My Profile</NavLink>
          
            
            {props.currentUser === null ?
              <NavLink to='/signup'>Sign Up</NavLink>
              : 
              null
            }
            
            {props.currentUser === null ? 
              <NavLink to='/login'>Login</NavLink>
              : 
              <button onClick={props.logoutHandler}>Logout</button>
            }

            {props.currentUser === null ? null : 
              props.currentUser.user_type === 'vendor' ? 
                <NavLink to='/candles/create'>Create a Candle</NavLink> 
                :
                null
            }

        </div>

    )
}

export default NavBar