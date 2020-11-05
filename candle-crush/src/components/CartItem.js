import React from 'react'

const CartItem = ({item}) => {
  return (
  <tr>
    <td>{item.name}</td>
    <td>1</td>
    <td>{item.price}</td>
    <td>{item.price}</td>
  </tr>
  )
}

export default CartItem
