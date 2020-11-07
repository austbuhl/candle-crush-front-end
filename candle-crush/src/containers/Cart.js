import React from 'react'
import CartItem from '../components/CartItem'
<<<<<<< HEAD
import {Route, Redirect, useHistory, Switch} from 'react-router-dom'


const Cart = ({cart, currentUser, checkoutHandler}) => {
=======
import { useHistory } from 'react-router-dom'

const Cart = ({cart, currentUser, addToCart}) => {
>>>>>>> a2d6cbdd580ca71c4aac88e6fbb62a8c5496fd8c
  let history = useHistory()

  const groupBy = (array, property) => {
    return array.reduce(function(acc, obj) {
      acc.count = 0
      let key = obj[property]
      if(!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      acc.count = acc[key].length
      return acc
    }, [])
  }

  // const createTally = items => {
  //   const tally = {}; // acts as the `acc`
  //   for (let i = 0; i < items.length; i++) { // loop over indexes in your array
  //     let current = items[i]; // get current item in your array (curr)
  //     // if statement peforms this logic seen in `.reduce()`: acc[curr] = (acc[curr] || 0) + 1
  //     if(tally[current]) // if the current item is already a key in your object then...
  //       tally[current]++ // increment the counter for current item
  //     else // if the current item isn't an item in your object, then...
  //       tally[current] = 1; // initialize the counter to 1
  //   }
  //   return tally; // return the `tally` (modified by the for loop)
  // }

  // [{candle_obj, qty}, {candle_obj, qty}]

  let formattedCart = groupBy(cart, 'name')

  console.log(formattedCart)


  const renderCartItems = () => {
<<<<<<< HEAD
    return cart.map((item, index) => <CartItem delete={null} add={this.props.add} count={filterAmount} key={index} item={item}/>)
=======
    return cart.map((item, index) => <CartItem key={index} item={item} addToCart={addToCart} />)
>>>>>>> a2d6cbdd580ca71c4aac88e6fbb62a8c5496fd8c
  }
  
  const cartTotals = () => {
    if (cart.length === 0 ) return [0]

    return cart.map((item) => item.price)
  }

  const filterAmount = (id) => {
    let items = cart.map(x => {x.id === id})
    return items.size

  }

  

  

  const checkoutButton = () => {
    
    if (currentUser) {
        history.push('/checkout')
    } else {
      history.push('/login')
    }
  }

  return (
      <>
      <table>
    <thead>
      <th>Name</th>
      <th>QTY</th>
      <th>Price</th>
      <th>$ Total</th>
      <th>Add</th>
    </thead>
    <tbody>
      {renderCartItems()}
      <tr>
        <td></td>
        <td>Total QTY: {cart.length}</td>
        <td></td>
        <td>{cartTotals().reduce((tot, accum) => tot + accum)}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <button onClick={checkoutButton}>Go to Checkout</button>
  </>
  )
}
export default Cart
