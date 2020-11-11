import React from 'react'
import Candle from '../components/Candle'
import Pagination from '@material-ui/lab/Pagination';
import {Route, Switch, withRouter} from 'react-router-dom'
import CandleDetail from '../components/CandleDetail'
import { unmountComponentAtNode, render} from "react-dom"


const CandlesContainer = props => {
  
  const renderCandles = () => {

    return props.candles.map(candle => <Candle unmountFilterContainer={props.unmountFilterContainer} key={candle.id} candle={candle} clickHandler={props.clickHandler} />)
   
  }

  

  return (
    <div>
    <Switch>
      <Route path='/candles/:id' render={(routerProps) => {
          let candle;
          if (props.candles.length > 0) {
            console.log(props.candles)
            let id = parseInt(routerProps.match.params.id)
            candle = props.candles.find(item => item.id === id)
            
            
            
          } 
          
          
            
          
          
          return (
            <div>
              {candle ? <CandleDetail unmountFilterContainer={props.unmountFilterContainer} currentUser={props.currentUser} candle={candle} clickHandler={props.clickHandler} /> : <h1>Loading</h1>}
            </div>
          )
        }}
        />
    
    <Route path="/candles" render={() => {
      return (
        <div id='candles-container'>
          {renderCandles()}
          <Pagination onChange={props.paginate} count={props.pages} color="primary"/>
        </div> 
      )
    }}
    />

  </Switch>
</div> )

}

export default withRouter(CandlesContainer)