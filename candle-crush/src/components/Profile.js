import React from 'react'
import Purchases from './Purchases'
import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid'


const Profile = (props) =>  {

  
  
  
  return (
    <Grid container justify='center'>
      <div>
        <h1>Profile Page</h1>
        <h4>{props.currentUser.username}</h4>
          
          <List>
            {<Purchases />}
          </List>
      
      </div>
    </Grid>
  )
}

export default Profile