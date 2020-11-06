import React from 'react'
import Candle from '../components/Candle'
import {Route, Switch, NavLink} from 'react-router-dom'
import CandleDetail from '../components/CandleDetail'

const CandlesContainer = ({candles, clickHandler}) => {



  const renderCandles = () => {
    return candles.map(candle => <Candle key={candle.id} candle={candle} clickHandler={clickHandler} />)
  }
  return (
<div>
<Switch>
  <Route path='/candles/:id' render={(routerProps) => {
    let candle;
    console.log(candle)
    if (candles.length > 0) {
      let id = parseInt(routerProps.match.params.id)
      candle = candles.find(item => item.id === id)
      


    } 
    return (
     
      <div>
        {<Candle candle={candle} clickHandler={clickHandler} />}
      </div>
      
    )
  }}>

  </Route>
  
   <Route path="/candles" render={() => {
    //  console.log("something wrong")
    return (
    
      <div className='candles-container'>
        {renderCandles()}
       </div> 
      
      )

     }}/>
    
   
    </Switch>
     
     
      </div> )
}

export default CandlesContainer