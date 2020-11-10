import React from 'react'
import Rating from '@material-ui/lab/Rating'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const CreateReview = props => {

  return (

    <form onSubmit={props.submitHandler}>
      {/* <input type="number" name="rating" value={props.ratingValue} onChange={props.changeHandler}></input>
      <input type="text" name="review" value={props.reviewValue} onChange={props.changeHandler}></input>
      <button>Create Review</button> */}
      <Rating
          label="Rate this Candle"
          value={props.ratingValue}
          name="rating"
          onChange={props.changeHandler}
          />
          
        <TextField id="outlined-multiline-static"
          label="Leave Your Review Here"
          multiline
          rows={3}
          defaultValue="Default Value"
          variant="outlined"
          value={props.reviewValue}
          name="review"
          onChange={props.changeHandler}/>
          <Button type="submit" variant="contained" color="primary">Post Your Review</Button>
          

    </form>
  )
}

export default CreateReview