import React from 'react'
const CartItem = ({item, addToCart, filteredCart, removeFromCart}) => {

  const addClickHandler = () => {
    addToCart(item )
  }

  const removeClickHandler = () => {
    removeFromCart(item)
  }

  return (
  <tr>
    <td>{item.name}</td>
    <td>{item.qty }</td>
    <td><button onClick={addClickHandler}>Add QTY</button></td>
    <td><button onClick={removeClickHandler}>Remove QTY</button></td>
    <td>{item.price}</td>
    <td>{item.price * item.qty}</td>
  
    
  </tr>
  )
}

export default CartItem
