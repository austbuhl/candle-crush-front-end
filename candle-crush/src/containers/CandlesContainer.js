import React from 'react'
import Candle from '../components/Candle'

const CandlesContainer = ({candles, clickHandler}) => {

  const renderCandles = () => {
    return candles.map(candle => <Candle key={candle.id} candle={candle} clickHandler={clickHandler} />)
  }

  return (
    
    <div className='candles-container'>
      {renderCandles()}
    </div>
    )
}

export default CandlesContainer