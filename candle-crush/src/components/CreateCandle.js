import React from 'react'

const CreateCandle = props => {

  return (
    <form onSubmit={props.submitHandler}>
      <input type="text" placeholder="Enter name" name="name" value={props.name}  onChange={props.changeHandler}/>
      <input type="text" placeholder="Enter description" name="description" value={props.description} onChange={props.changeHandler}/>
      <input type="text" placeholder="Enter scent" name="scent" value={props.scent} onChange={props.changeHandler}/>
      <input type="number" placeholder="Enter price" name="price" value={props.price} onChange={props.changeHandler}/>
      <input type="text" placeholder="Enter image" name="image" value={props.image} onChange={props.changeHandler}/>
      <button type="submit">Create Candle</button>
    </form>
  )
}

export default CreateCandle