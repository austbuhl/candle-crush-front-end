import React from 'react'
import Purchases from './Purchases'
import { render } from 'react-dom'

const Profile = (props) =>  {

  
  
  
  return (
    <div>
      <h1>Profile Page</h1>
      <span>{props.currentUser.username}</span>
      
        {<Purchases />}
      
      
      
    </div>
  )
}

export default Profile