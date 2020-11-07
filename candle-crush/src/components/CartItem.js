import React from 'react'

<<<<<<< HEAD
const CartItem = ({item, add}) => {
  const updateCartQuant = () => {
    add(item)
    

    
  }
  
  return (
  <tr>
    <td>{item.name}</td>
    <td>{null}</td>
=======
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
>>>>>>> a2d6cbdd580ca71c4aac88e6fbb62a8c5496fd8c
    <td>{item.price}</td>
  <button onClick={updateCartQuant}>{0}</button>
    
  </tr>
  )
}

export default CartItem
