import React from 'react'
import CartItem from '../components/CartItem'
import Checkout from '../components/Checkout'

const Cart = ({cart, checkoutHandler}) => {

  const renderCartItems = () => {
    return cart.map((item, index) => <CartItem key={index} item={item}/>)
  }
  
  const cartTotals = () => {
    if (cart.length === 0 ) return [0]

    return cart.map((item) => item.price)
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
      
      <Checkout checkoutHandler={checkoutHandler}/>
    </>
  )

}

export default Cart

