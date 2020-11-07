import React from 'react'
import CartItem from '../components/CartItem'
import {Route, Redirect, useHistory, Switch} from 'react-router-dom'


const Cart = ({cart, currentUser, checkoutHandler}) => {
  let history = useHistory()

  const renderCartItems = () => {
    return cart.map((item, index) => <CartItem delete={null} add={this.props.add} count={filterAmount} key={index} item={item}/>)
  }
  
  const cartTotals = () => {
    if (cart.length === 0 ) return [0]

    return cart.map((item) => item.price)
  }

  const filterAmount = (id) => {
    let items = cart.map(x => {x.id === id})
    return items.size

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
      <table>
    <thead>
      <th>Name</th>
      <th>QTY</th>
      <th>Price</th>
      <th>$ Total</th>
    </thead>
    <tbody>
      {renderCartItems()}
      <tr>
        <td></td>
        <td>Total QTY: {cart.length}</td>
        <td></td>
        <td>{cartTotals().reduce((tot, accum) => tot + accum)}</td>
      </tr>
    </tbody>
  </table>
  <button onClick={checkoutButton}>Go to Checkout</button>
  </>
  )
}
export default Cart
    
     

    
      
    
   
  
      
      
        
    
      
    
      
      
      

      
      

    
      


