import React from 'react'
import CartItem from '../components/CartItem'
import { useHistory } from 'react-router-dom'

const Cart = ({cart, currentUser, addToCart}) => {
  let history = useHistory()

  // const groupBy = (array, property) => {
  //   return array.reduce(function(acc, obj) {
  //     acc.count = 0
  //     let key = obj[property]
  //     if(!acc[key]) {
  //       acc[key] = []
  //     }
  //     acc[key].push(obj)
  //     acc.count = acc[key].length
  //     return acc
  //   }, [])
  // }

  let cartCopy = cart.map((item) => ({...item, qty: 0}))
    
  const updatedCart = cartCopy.map(item => {
    if(cartCopy.includes(item)) {
      let foundItem = cartCopy.find(el => el.id === item.id)
      foundItem.qty++
      return foundItem
    } else {
      return item
      
      
    }
  })

  const filteredCart = updatedCart.filter((a, b) => updatedCart.indexOf(a) === b)

  const renderCartItems = () => {
    return filteredCart.map((item, index) => <CartItem key={index} item={item} addToCart={addToCart} />)
  }
  
  const cartTotals = () => {
    if (cart.length === 0 ) return [0]

    return cart.map((item) => item.price)
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
      <th>Add</th>
      <th>Price</th>
      <th>$ Total</th>
    </thead>
    <tbody>
      {renderCartItems()}
      <tr>
        <td></td>
        <td>{cart.length}</td>
        <td></td>
        <td></td>
        <td>{cartTotals().reduce((tot, accum) => tot + accum)}</td>
      </tr>
    </tbody>
  </table>
  <button onClick={checkoutButton}>Go to Checkout</button>
  </>
  )
}
export default Cart
