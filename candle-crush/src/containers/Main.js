import React from 'react'
import CandlesContainer from './CandlesContainer'
import FilterContainer from './FilterContainer'
import Checkout from '../components/Checkout'
import Cart from './Cart'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Signup from '../components/Signup'
import CreateCandle from '../components/CreateCandle'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'



class Main extends React.Component {

  state = {
    candles: [],
    searchValue: "",
    filterValue: "highLow",
    filterScent: "",
    cart: [],
    name: "",
    price: "",
    image: "",
    description: "",
    scent: "",
    quantity: "",
    currentPage: 1,
    candlesPerPage: 10
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
    let indexOfLastCandle = this.state.currentPage * this.state.candlesPerPage
    let indexOfFirstCandle = indexOfLastCandle - this.state.candlesPerPage
    let candlesList = this.state.candles.slice(indexOfFirstCandle, indexOfLastCandle)
    let filteredCandles = candlesList.filter(candle => {return candle.name.includes(this.state.searchValue)})

    
    
    let filterCandlesScent = (this.state.filterScent === "" ? filteredCandles : filteredCandles.filter(candle => { return candle.scents.includes(this.state.filterScent)}))
   
    console.log(filterCandlesScent)
  
    
    
   
  
    
    if (this.state.filterValue === "highLow") {
      return filterCandlesScent.sort((a, b) => {
        return b.price - a.price
      })
    } else {
      return filterCandlesScent.sort((a, b) => {
        return a.price - b.price
      })
    }
  }

  filterPrice = (e) => {
    
    this.setState({
      filterValue: e.target.value
    })
  }



  filterScent = (e, value) => {
   

    this.setState({
      filterScent: value
    })
    
    
        
      
   
    
    
  }

  addToCart = candleObj => {
    let updatedCart = [...this.state.cart, candleObj]
    this.setState({
      cart: updatedCart
    })
    this.props.updateCartLength(updatedCart.length)
  }

  removeFromCart = candleObj => {
    let foundItem = this.state.cart.find(obj => obj.id === candleObj.id)
    let cartItem = this.state.cart.indexOf(foundItem)
    this.state.cart.splice(cartItem, 1)
    let updatedCart = [...this.state.cart]
    this.setState({
      cart: updatedCart
    })
    this.props.updateCartLength(updatedCart.length)
  }

  checkoutHandler = () => {
    const token = localStorage.getItem('token')
    
    fetch('http://localhost:3000/api/v1/purchases', {
      method: "POST",
      headers: {

        "content-type": "application/json",
        Authorization: `Bearer ${token}`
        
        
      },
      body: JSON.stringify({user: this.props.currentUser.id, candle: this.state.cart})
    }).then(resp => resp.json()).then(data => console.log(data))
  }

  candleChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createCandle = e => {
    e.preventDefault()

    let candleObj = {
      candle: {
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
        description: this.state.description,
        scent: this.state.scent,
        quantity: this.state.quantity,
        starting_inv: this.state.quantity
      }
    }
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/api/v1/candles', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${token}`,
        accepts: "application/json"
      },
      body: JSON.stringify(candleObj)
    })
      .then(resp => resp.json())
      .then(newCandle => {
        let updatedCandles = [...this.state.candles, newCandle]
        this.setState({
          candles: updatedCandles,
          name: "",
          price: "",
          image: "",
          description: "",
          scent: "",
          quantity: ""

        }, () => {
          this.props.history.push(`/candles/${newCandle.id}`)
          // this.props.history.location
          
          // <Redirect from='/candles/create' to='/candles' />
        })
      })

      
    }
    
   

  paginate = (event, value) => {
    this.setState({
        currentPage: value
    })
  }
  

  render(){
  
    return (
      <div id="main-container" >
        <Switch>
          
          <Route path='/candles/create'>
            <CreateCandle name={this.state.name} price={this.state.price} description={this.state.description} image={this.state.image} scent={this.state.scent} changeHandler={this.candleChangeHandler} submitHandler={this.createCandle}/>
          </Route>

          <Route path='/candles' >
            <FilterContainer candles={this.state.candles} scentValue={this.state.filterScent} searchHandler={this.searchBarHandler} filterScent={this.filterScent} filterPrice={this.filterPrice} filterValue={this.state.filterValue} searchValue={this.state.searchValue}/>
            <CandlesContainer currentUser={this.props.currentUser} clickHandler={this.addToCart} candles={this.filterCandles()} paginate={this.paginate} />
          </Route>
          
          <Route path='/cart'>
            <Cart removeFromCart={this.removeFromCart} currentUser={this.props.currentUser} cart={this.state.cart} checkoutHandler={this.checkoutHandler} addToCart={this.addToCart}/>
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

          <Route path='/profile'>
            <Profile purchases={this.props.purchases} currentUser={this.props.currentUser}/>
          </Route>

        </Switch>
      </div>
    ) 
  }
}

export default withRouter(Main)