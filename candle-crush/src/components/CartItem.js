import React from 'react'

const CartItem = ({item, addToCart}) => {

  const clickHandler = () => {
    addToCart(item)
  }

  return (
  <tr>
    <td>{item.name}</td>
    <td>1</td>
    <td><button onClick={clickHandler}>Add QTY</button></td>
    <td>{item.price}</td>
    <td>{item.price}</td>
  </tr>
  )
}

export default CartItem
