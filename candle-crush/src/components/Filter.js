import React from 'react'
import Radio from '@material-ui/core/Radio';
//import Checkbox from '@material-ui/core/Checkbox'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'



const Filter = props => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Filter by Price</FormLabel>
        
        <RadioGroup className="radio-button" aria-label="" name="price" >
          <FormControlLabel onChange={props.filterPrice} className="radio-button" checked={props.filterValue === "lowHigh"} value="lowHigh" control={<Radio />} label="Low to High" />
          <FormControlLabel onChange={props.filterPrice} className="radio-button" checked={props.filterValue === "highLow"} value="highLow" control={<Radio />} label="High to Low" /> 
        </RadioGroup>
      </FormControl>
      
      <FormControl >
        <InputLabel id="demo-controlled-open-select-label">Filter by Scent</InputLabel>
        <Select labelId="scentSelect" id="demo-controlled-open-select" value={props.scent} onChange={props.filterScent}>
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          <MenuItem value={1}>good smell</MenuItem>
          <MenuItem value={2}>other smell</MenuItem>
          <MenuItem value={3}>odiferous smell</MenuItem>
        </Select>
      </FormControl>
    </>
    )
}

export default Filter
