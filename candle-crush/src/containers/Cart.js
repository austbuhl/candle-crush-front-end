import React from 'react'
import CartItem from '../components/CartItem'
import { useHistory } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'



const Cart = ({cart, currentUser, addToCart, removeFromCart}) => {
  let history = useHistory()

  // const groupBy = (array, property) => {
  //   return array.reduce(function(acc, obj) {
  //     acc.count = 0
  //     let key = obj[property]
  //     if(!acc[key]) {
  //       acc[key] = []
  //     }
  //     acc[key].push(obj)
  //     acc.count = acc[key].length
  //     return acc
  //   }, [])
  // }

  const useStyles = makeStyles((theme) => ({
    
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
   
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      
    },
  }));
  const classes = useStyles()

  let cartCopy = cart.map((item) => ({...item, qty: 0}))
    
  const updatedCart = cartCopy.map(item => {
    if(cartCopy.includes(item)) {
      let foundItem = cartCopy.find(el => el.id === item.id)
      foundItem.qty++
      return foundItem
    } else {
      return item
      
      
    }
  })



  const filteredCart = updatedCart.filter((a, b) => updatedCart.indexOf(a) === b)

  const renderCartItems = () => {
    return filteredCart.map((item, index) => <CartItem key={index} item={item} removeFromCart={removeFromCart} addToCart={addToCart} />)
  }
  
  const cartTotals = () => {
    if (cart.length === 0 ) return [0]

    return cart.map((item) => item.price)
  }
  
  const checkoutButton = () => {
    
    if (currentUser) {
        history.push('/checkout')
    } else {
      history.push('/login')
    }
  }

  return (
      <div className={classes.layout}>
        <Paper className={classes.paper}>


        
    <Grid container justify='center' spacing={12} alignContent='space-around'>

      


        <Typography variant='h3' gutterBottom>Your Cart</Typography>
  
          
       
      
      
    {renderCartItems()}
    
  <Grid item xs={12}>
  
  <Button className={classes.button} fullWidth variant="contained" color="primary" onClick={checkoutButton}>Go to Checkout</Button>
  </Grid>
  </Grid>
  </Paper>
      </div>
          
          )
        }

export default Cart
