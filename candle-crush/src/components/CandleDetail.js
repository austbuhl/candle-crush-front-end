import React from 'react'
import {withRouter, BrowserHistory} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



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
            <ListItem >
                <ListItemText
                primary={review.user.username}
                secondary={review.rating} 
                >
                </ListItemText>
                    <Divider variant="inset" component="li"/>
                <ListItemText
                primary={review.review}
                >
                </ListItemText>
            </ListItem> 
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

  componentDidUpdate(prevProps, prevState) {
    if(prevState.rating !== this.state.rating) {
      fetch(`http://localhost:3000/api/v1/candles/${this.props.candle.id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        reviews: data.reviews
      }))
    }
  }

  getAggregateReview = () => {
      let ratings = this.state.reviews.map(review => review.rating).reduce((total, accumulator) => {
          return total + accumulator
      }, 0)

      let average = ratings / this.state.reviews.length
      return average.toFixed(1)
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
          // reviews: updatedReviews,
          rating: "",
          review: ""
        })
      })
  }
  
  renderScents = () => {
    return this.props.candle.scents.map(scent => <span>{`${scent} `}</span>)
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <Grid container justify='flex-start'>

            <Grid item xs={3}>

          <h1>{this.props.candle.name}</h1>
          <img className='candle-img' src={this.props.candle.image}/>
            </Grid>

            
            <Grid item xs={9} spacing={5}>
                <h4>Bio </h4>
          <p> {this.props.candle.description}</p>
          <h4>Scent Profile </h4>
          <p>{this.renderScents()}</p>
          <h4>Price</h4>
          <p> $ {this.props.candle.price}</p>
          <h4>Left in Stock</h4>
          <p>{this.props.candle.quantity}</p>
          <Button variant="contained" color="primary" onClick={this.addToCartHandler}>Add to Cart</Button>
        </Grid>
        </Grid>
          <h4>Reviews</h4>
          <h4>Average Rating : {this.getAggregateReview() === 'NaN' ? 0 : this.getAggregateReview()}</h4>
          <List>
              {this.renderReviews()}
          </List>
          <CreateReview changeHandler={this.reviewChangeHandler} submitHandler={this.submitReview} ratingValue={this.state.rating} reviewValue={this.state.review}/>
      </div>
    )
  }

}



export default withRouter(CandleDetail)