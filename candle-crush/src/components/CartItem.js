import React from 'react'
const CartItem = ({item, addToCart, filteredCart}) => {

  const clickHandler = () => {
    addToCart(item )
  }

  return (
  <tr>
    <td>{item.name}</td>
    <td>{item.qty }</td>
    <td><button onClick={clickHandler}>Add QTY</button></td>
    <td>{item.price}</td>
    <td>{item.price * item.qty}</td>
  
    
  </tr>
  )
}

export default CartItem
