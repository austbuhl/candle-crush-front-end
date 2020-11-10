import React from 'react'
import CartItem from '../components/CartItem'
import { useHistory } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'



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
      <>
        
    <Grid container justify='center' spacing={2} alignContent='space-around'>

      <List>
      

<ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Item Name"
          >
         
        </ListItemText>
        <Divider variant="inset" component="li"/>
        <ListItemText
          primary= {'\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Quantity'}
          ></ListItemText>
        <Divider variant="inset" component="li"/>
        <ListItemText
          primary="Price"
          ></ListItemText>
          <Divider variant="inset" component="li"/>
          <ListItemText
            primary= "Total"
            
            ></ListItemText>
        <Divider variant="inset" component="li"/>
        </ListItem>
    {renderCartItems()}
       <Button fullWidth variant="contained" color="primary" onClick={checkoutButton}>Go to Checkout</Button>
  </List>
  </Grid>
          
        
         
        
          
        
        
        
          


          
          
        
        
        
        
        
        

  </>
  )
}
export default Cart
