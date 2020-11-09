import React from 'react'
import Candle from '../components/Candle'
import {Route, Switch} from 'react-router-dom'
import CandleDetail from '../components/CandleDetail'

class CandlesContainer extends React.Component {
  state = {
    selectedCandle: {},
    selectedId: ""
  }

  candleSelectHandler = (candle) => {
    this.setState({
      selectedId: candle.id
    })

  }
  
  
  renderCandles = () => {
    return this.props.candles.map(candle => <Candle key={candle.id} candle={candle} clickHandler={this.props.clickHandler} selectCandle={this.candleSelectHandler}/>)
  }

  fetchSelectedCandle = () => {
    fetch(`http://localhost:3000/api/v1/candles/${this.state.selectedId}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      selectedCandle: data
    })
    
    )

  }

  componentWillUnmount() {
    this.fetchSelectedCandle()
    
  }
      
      
      
   
       
       
      

  
  
  
  
  render() {
    console.log(this.state.selectedId)
    console.log(this.state.selectedCandle)
    return (
      <div>
      <Switch>

        <Route path='/candles/:id' render={() => {
       
          
          return (
            <div>
            {<CandleDetail candle={this.state.selectedCandle} clickHandler={this.props.clickHandler} />}
          </div>
        )
      }}
          
          
          
        />
      
      <Route path="/candles" render={() => {
        return (
          <div id='candles-container'>
            {this.renderCandles()}
          </div> 
        )
      }}
      />

    </Switch>
  </div> )
}
}

export default CandlesContainer