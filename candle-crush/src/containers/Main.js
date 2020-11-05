import React from 'react'
import CandlesContainer from './CandlesContainer'
import FilterContainer from './FilterContainer'

class Main extends React.Component {

state={
  candles: [],
  searchValue: "",
  filterValue: "highLow",
  filterScent: "good smell"
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



render(){
  console.log(this.state.filterValue)
  console.log(this.state.searchValue)
  
  
  return (
    <div className="main-container" >
      <FilterContainer scent={this.state.filterScent} searchHandler={this.searchBarHandler} filterScent={this.filterScent} filterPrice={this.filterPrice} filterValue={this.state.filterValue} searchValue={this.state.searchValue}/>
      <CandlesContainer candles={this.filterCandles()} />
    </div>
  ) 
}
}

export default Main