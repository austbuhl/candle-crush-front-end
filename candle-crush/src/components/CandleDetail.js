import React from 'react'
import CreateReview from './CreateReview'

class CandleDetail extends React.Component {

  state={
    reviews: [],
    rating: "",
    review: ""
  }

  renderReviews = () => {

    return this.state.reviews.map(review => {
        return (
            <li> {review.user.username} --- {review.rating} : {review.review}</li>
          )
        })
  }

  addToCartHandler = () => {
    this.props.clickHandler(this.props.candle)
  }

  componentDidMount() {
      fetch(`http://localhost:3000/api/v1/candles/${this.props.candle.id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        reviews: data.reviews
      }))
  }

  reviewChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitReview = e => {
    e.preventDefault()

    let reviewObj = {
      review: {
        user_id: this.props.currentUser.id,
        candle_id: this.props.candle.id,
        review: this.state.review,
        rating: this.state.rating
      }
    }

    fetch('http://localhost:3000/api/v1/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }, 
      body: JSON.stringify(reviewObj)
    })
      .then(resp => resp.json())
      .then(newReview => {
        let updatedReviews = [...this.state.reviews, newReview]
        this.setState({
          reviews: updatedReviews,
          rating: "",
          review: ""
        })
      })
  }

  render() {
    return (
      <div>
          <h1>{this.props.candle.name}</h1>
          <img src={this.props.candle.image}/>
          <p> Bio: {this.props.candle.description}</p>
          <p>Scent Profile : {this.props.candle.scent}</p>
          <p>Price : ${this.props.candle.price}</p>
          <p>Left in Stock : {this.props.candle.quantity}</p>
          <button onClick={this.addToCartHandler}> Add to Cart</button>
          <h4>Reviews</h4>
          <ul>
              {this.renderReviews()}
          </ul>
          <CreateReview changeHandler={this.reviewChangeHandler} submitHandler={this.submitReview} ratingValue={this.state.rating} reviewValue={this.state.review}/>
      </div>
    )
  }

}



export default CandleDetail