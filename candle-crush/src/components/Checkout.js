import React from 'react'

const Checkout = (props) => {
  let itemsWithPrice
  let totalPrice
  if (props.cart.length === 0) {
    totalPrice = 0
  } else {
    itemsWithPrice= props.cart.map(item => item.price)
    totalPrice = itemsWithPrice.reduce((total, accumulator) => total + accumulator)

  }


  return(
    
    <>
    
    <h1> Your Cart</h1>
    <span>Total for all Items : {totalPrice} </span>

    <form onSubmit={null}>
      <input type="text" label="streetAddress" name="address" placeholder="Enter Street Address"></input>
      <input type="text" label="town" name="town" placeholder="Enter Town/City"></input>
      <input type="text" label="state" name="state" placeholder="Enter State"></input>
      <input type="text" label="zipcode" name="zip" placeholder="Enter Zipcode"></input>
      <button onClick={props.checkoutHandler}>Checkout</button>
    </form>
      
    </>
    
  )
}

export default Checkout