import React from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'

const FilterContainer = props => {
  
  const filterScentsFromCandles = () => {
    let mappedCandles = props.candles.map(candle => candle.scents)
    let newCandlesArray = mappedCandles.flat(1)
    return newCandlesArray.filter((v, i, a) => a.indexOf(v) === i).filter(el => el !== null)
    


  }
    
  
  
  return (
    <div id="filters-container">
      <Search searchHandler={props.searchHandler} searchValue={props.searchValue}/>
      <Filter scents={filterScentsFromCandles()}  filterScent={props.filterScent} filterValue={props.filterValue} filterPrice={props.filterPrice}/>
    </div>
    )
}

export default FilterContainer