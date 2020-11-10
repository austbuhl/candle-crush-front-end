import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Grid from '@material-ui/core/Grid'


const CartItem = ({item, addToCart, filteredCart, removeFromCart}) => {

  const addClickHandler = () => {
    addToCart(item )
  }

  const removeClickHandler = () => {
    removeFromCart(item)
  }

  return (
    
    <Grid container align='center'  >

    <ListItem alignItems="flex-start">
      <Grid item >

        <ListItemAvatar>
          <Avatar alt="Candle Image" src={item.image} />
        </ListItemAvatar>
      </Grid>
      <Grid item>

        <ListItemText
          
          primary = {item.name}
          disableTypography
          >
        </ListItemText>
      </Grid>
        <Divider variant="inset" component="li"/>
        
          


        
         
        <Grid item justify='center'>

          <IconButton size='small' edge='end'>
            <RemoveCircleIcon  onClick={removeClickHandler}></RemoveCircleIcon>
          </IconButton>
        </Grid>
        <Grid item>

        <ListItemText
          
          primary = {item.qty}
          
          
          
          
          ></ListItemText>
          </Grid>
          
          <Grid item>

         <IconButton size='small' edge='end'>
            <AddCircleIcon  onClick={addClickHandler}></AddCircleIcon>
          </IconButton>
          </Grid>
          
        <Divider variant="inset" component="li"/>
        <Grid item>

        <ListItemText
          
          primary = {`$ ${item.price}`}
          disableTypography
          
          
          
          ></ListItemText>
          </Grid>
        <Divider variant="inset" component="li"/>
        <Grid item>

        <ListItemText
          
          primary= {`$ ${item.price * item.qty}`} 
          disableTypography
          
          
          
          ></ListItemText>
          </Grid>
        <Divider variant="inset" component="li"/>
        </ListItem>
  

          </Grid>

  )
}

export default CartItem
