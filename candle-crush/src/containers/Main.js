import React from 'react'
import CandlesContainer from './CandlesContainer'
import FilterContainer from './FilterContainer'

class Main extends React.Component {

state={
  candles: []
}

componentDidMount() {
  fetch('http://localhost:3000/candles')
    .then(resp => resp.json())
    .then(candles => this.setState({candles}))
}

render(){
  return (
    <div className="main-container" >
      <FilterContainer />
      <CandlesContainer candles={this.state.candles} />
    </div>
  ) 
}
}

export default Main