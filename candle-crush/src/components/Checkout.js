import React from 'react'

const Checkout = ({checkoutHandler}) => {
  return(
    <button onClick={checkoutHandler}>Checkout</button>
  )
}

export default Checkout