import React from 'react'

const CreateReview = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <input type="number" name="rating" value={props.ratingValue} onChange={props.changeHandler}></input>
      <input type="text" name="review" value={props.reviewValue} onChange={props.changeHandler}></input>
      <button>Create Review</button>
    </form>
  )
}

export default CreateReview