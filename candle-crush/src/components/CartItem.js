import React from 'react'

const CartItem = ({item, add}) => {
  const updateCartQuant = () => {
    add(item)
    

    
  }
  
  return (
  <tr>
    <td>{item.name}</td>
    <td>{null}</td>
    <td>{item.price}</td>
  <button onClick={updateCartQuant}>{0}</button>
    
  </tr>
  )
}

export default CartItem
