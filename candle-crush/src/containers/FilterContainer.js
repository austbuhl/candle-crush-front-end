import React from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'

const FilterContainer = props => {

  
  return (
    <div id="filters-container">
      <Search searchHandler={props.searchHandler} searchValue={props.searchValue}/>
      <Filter scent={props.scent} filterScent={props.filterScent} filterValue={props.filterValue} filterPrice={props.filterPrice}/>
    </div>
    )
}

export default FilterContainer