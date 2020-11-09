import React from 'react'
import {NavLink} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = (props) => {

  // <AppBar position="static">
  // <Toolbar>
    // <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //   <MenuIcon />
    // </IconButton>
  //   <Typography variant="h6" className={classes.title}>
  //     News
  //   </Typography>
  //   <Button color="inherit">Login</Button>
  // </Toolbar>
// </AppBar>


    return(
      <div id="navbar">
        <NavLink to='/candles' >Products</NavLink>

        {/* {props.currentUser === null ? null : 
          props.currentUser.user_type === 'vendor' ? 
            <NavLink to='/candles/create'>Create a Candle</NavLink> 
            :
            null
        } */}
        <NavLink to='/cart'>
          <ShoppingCartIcon />
        </NavLink>
        <NavLink to='/profile'>
          <AccountCircleIcon />
        </NavLink>

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
      </div>
    )
}

export default NavBar