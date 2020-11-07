import React from 'react'
import CandlesContainer from './CandlesContainer'
import FilterContainer from './FilterContainer'
import Checkout from '../components/Checkout'
import Cart from './Cart'
import Login from '../components/Login'
import Signup from '../components/Signup'
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
  console.log(this.state.cart)
  return (

    <div className="main-container" >
      <Switch>
      
      <Route path='/candles' >
      <FilterContainer scent={this.state.filterScent} searchHandler={this.searchBarHandler} filterScent={this.filterScent} filterPrice={this.filterPrice} filterValue={this.state.filterValue} searchValue={this.state.searchValue}/>
      <CandlesContainer clickHandler={this.addToCart} candles={this.filterCandles()} />
      </Route>
      
      <Route path='/cart'>
      <Cart currentUser={this.props.currentUser} cart={this.state.cart} checkoutHandler={this.checkoutHandler} addToCart={this.addToCart}/>
      </Route>

      <Route path='/checkout'>
        <Checkout currentUser={this.props.currentUser} cart={this.state.cart} checkoutHandler={this.checkoutHandler}/>
      </Route>
      
      <Route path='/login'>
        <Login loginSubmit={this.props.loginSubmit} inputHandler={this.props.inputHandler} username={this.props.username} password={this.props.password} />
      </Route>

      <Route path='/signup' >
        <Signup inputHandler= {this.props.inputHandler} signupSubmit={this.props.signupSubmit} username={this.props.username} password={this.props.password} user_type={this.props.user_type}/>
        </Route>
        
      

      </Switch>
    </div>
  ) 
}
}

export default Main