import React from 'react'

const Checkout = (props) => {
let itemsWithPrice= props.cart.map(item => item.price)
let totalPrice = itemsWithPrice.reduce((total, accumulator) => total + accumulator)
  return(
    <>
    <h1> Your Cart</h1>
    <span>Total for all Items : {totalPrice} </span>

    <form>
      <input type="text" label="streetAddress" name="address"></input>
      <input type="text" label="town" name="town"></input>
      <input type="text" label="town" name="town"></input>
      <select>
        
      </select>
      <input type="text" label="zipcode" name="town"></input>
      <input type="text" label="town" name="town"></input>
    </form>
    <button onClick={props.checkoutHandler}>Checkout</button>
    </>
  )
}

export default Checkout