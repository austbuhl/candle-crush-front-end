import React from 'react'

const CandleDetail = (props) => {
    const renderReviews = () => {
        if (props.candle.reviews.length > 0) {

            return props.candle.reviews.map(review => {
                return (
                    <li>{review.rating} : {review.review}</li>
                    )
                })
            } else {
                console.log('did nothuing')
            }


    }

    
    console.log(props)
    return (
        
        <div>
            <h1>{props.candle.name}</h1>
            <img src={props.candle.image}> </img>
            <p> {props.candle.description}</p>
            <p>{props.candle.scent}</p>
            <p>{props.candle.price}</p>
            <button onClick={null}> Add to Cart</button> 
            <ul>
                {renderReviews()}
                
            </ul>
        </div>
    )

}

export default CandleDetail