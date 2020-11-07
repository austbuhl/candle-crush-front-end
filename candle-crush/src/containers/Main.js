import React from 'react'
import CandlesContainer from './CandlesContainer'
import FilterContainer from './FilterContainer'
import Checkout from '../components/Checkout'
import Cart from './Cart'
import Login from '../components/Login'
import {Route, Switch} from 'react-router-dom'

class Main extends React.Component {

state={
  candles: [],
  searchValue: "",
  filterValue: "highLow",
  filterScent: "good smell",
  cart: [],
  
}

componentDidMount() {
  fetch('http://localhost:3000/api/v1/candles')
    .then(resp => resp.json())
    .then(candles => this.setState({candles}))
}

searchBarHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

filterCandles = () => {
  let candlesList = this.state.candles
  let filteredCandles = candlesList.filter(candle => {return candle.name.includes(this.state.searchValue)})
  
  if (this.state.filterValue === "highLow") {
    return filteredCandles.sort((a, b) => {
      return b.price - a.price
  })

  
} else {
  return filteredCandles.sort((a, b) => {
    return a.price - b.price
  })
}
}


filterPrice = (e) => {
  console.log(e.target)
  this.setState({
    filterValue: e.target.value
  })
}

filterScent = (e) => {
  this.setState({
    filterScent: e.target.value
  })
}

addToCart = candleObj => {
  let updatedCart = [...this.state.cart, candleObj]
  this.setState({
    cart: updatedCart
  })
}

checkoutHandler = () => {
  
  fetch('http://localhost:3000/api/v1/purchases', {
    method: "POST",
    headers: {

      "content-type": "application/json",
      accepts: "application/json"
      
    },
    body: JSON.stringify({user: this.props.currentUser.id, candle: this.state.cart})
  }).then(resp => resp.json()).then(data => console.log(data))
}


render(){
  return (

    <div className="main-container" >
      <Switch>
      
      <Route path='/candles' >
      <FilterContainer scent={this.state.filterScent} searchHandler={this.searchBarHandler} filterScent={this.filterScent} filterPrice={this.filterPrice} filterValue={this.state.filterValue} searchValue={this.state.searchValue}/>
      <CandlesContainer clickHandler={this.addToCart} candles={this.filterCandles()} />
      </Route>
      
      <Route path='/cart'>
<<<<<<< HEAD
      <Cart currentUser={this.props.currentUser} cart={this.state.cart} checkoutHandler={this.checkoutHandler} add={this.addToCart}/>
=======
      <Cart currentUser={this.props.currentUser} cart={this.state.cart} checkoutHandler={this.checkoutHandler} addToCart={this.addToCart}/>
>>>>>>> a2d6cbdd580ca71c4aac88e6fbb62a8c5496fd8c
      </Route>

      <Route path='/checkout'>
        <Checkout currentUser={this.props.currentUser} cart={this.state.cart} checkoutHandler={this.checkoutHandler}/>
      </Route>
      
      <Route path='/login'>
        <Login loginSubmit={this.props.loginSubmit} loginInputHandler={this.props.loginInputHandler} username={this.props.username} password={this.props.password} />
      </Route>

      
      </Switch>
    </div>
  ) 
}
}

export default Main