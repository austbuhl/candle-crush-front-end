import React from 'react'
import background from '../imgs/main.jpeg'
import {NavLink} from 'react-router-dom'


const Welcome = () => {


  return (

      <div id="welcome-page">
        <NavLink to="/candles">
          <h1 >Welcome to the Crush</h1>
        </NavLink>
        <img src={background} alt="" style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            left: "0px",
            right: "0px",
            top: "-40em",
            zIndex: "-1"
        }}/>
      </div>
  
  )
}

export default Welcome