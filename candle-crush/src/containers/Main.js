import React from 'react'
import CandlesContainer from './CandlesContainer'
import FilterContainer from './FilterContainer'
import Checkout from '../components/Checkout'
import Cart from './Cart'
import {Route, Switch} from 'react-router-dom'

class Main extends React.Component {

state={
  candles: [],
  searchValue: "",
  filterValue: "highLow",
  filterScent: "good smell",
  cart: [],
  currentUser: {}
}

componentDidMount() {
  fetch('http://localhost:3000/candles')
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
  fetch('http://localhost:3000/purchases', {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify({user_id: 1, candle: this.state.cart})
  })
}


render(){
  console.log(this.state.cart)
  
  
  return (

    <div className="main-container" >
      <Switch>
      <Route path='/candles' >
      <FilterContainer scent={this.state.filterScent} searchHandler={this.searchBarHandler} filterScent={this.filterScent} filterPrice={this.filterPrice} filterValue={this.state.filterValue} searchValue={this.state.searchValue}/>
      <CandlesContainer clickHandler={this.addToCart} candles={this.filterCandles()} />
      </Route>
      <Route path='/cart'>

      <Cart cart={this.state.cart} checkoutHandler={this.checkoutHandler}/>
      </Route>
      <Route path='/checkout'>
        <Checkout cart={this.state.cart}/>
        
      </Route>
      
      </Switch>
    </div>
  ) 
}
}

export default Main